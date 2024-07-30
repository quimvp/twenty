import { Injectable } from '@nestjs/common';

import axios, { AxiosInstance } from 'axios';
import { EntityManager } from 'typeorm';
import { v4 } from 'uuid';

import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { CompanyRepository } from 'src/modules/company/repositories/company.repository';
import { CompanyWorkspaceEntity } from 'src/modules/company/standard-objects/company.workspace-entity';
import { getCompanyNameFromDomainName } from 'src/modules/contact-creation-manager/utils/get-company-name-from-domain-name.util';
import { getCompanyDomainName } from 'src/utils/getCompanyDomainName';
@Injectable()
export class CreateCompanyService {
  private readonly httpService: AxiosInstance;

  constructor(
    @InjectObjectMetadataRepository(CompanyWorkspaceEntity)
    private readonly companyRepository: CompanyRepository,
  ) {
    this.httpService = axios.create({
      baseURL: 'https://companies.twenty.com',
    });
  }

  async createCompanies(
    domainNames: string[],
    workspaceId: string,
    companyDomainNameColumnName: string,
    transactionManager?: EntityManager,
  ): Promise<{
    [domainName: string]: string;
  }> {
    if (domainNames.length === 0) {
      return {};
    }

    const uniqueDomainNames = [...new Set(domainNames)];

    const existingCompanies =
      await this.companyRepository.getExistingCompaniesByDomainNames(
        uniqueDomainNames,
        workspaceId,
        companyDomainNameColumnName,
        transactionManager,
      );

    const companiesObject = existingCompanies.reduce(
      (
        acc: {
          [domainName: string]: string;
        },
        company: {
          domainName: string;
          id: string;
        },
      ) => ({
        ...acc,
        [company.domainName]: company.id,
      }),
      {},
    );

    const filteredDomainNames = uniqueDomainNames.filter(
      (domainName) =>
        !existingCompanies.some(
          (company: { domainName: string }) =>
            getCompanyDomainName(company) === domainName,
        ),
    );

    for (const domainName of filteredDomainNames) {
      companiesObject[domainName] = await this.createCompany(
        domainName,
        workspaceId,
        companyDomainNameColumnName,
        transactionManager,
      );
    }

    return companiesObject;
  }

  private async createCompany(
    domainName: string,
    workspaceId: string,
    companyDomainNameColumnName,
    transactionManager?: EntityManager,
  ): Promise<string> {
    const companyId = v4();

    const { name, city } = await this.getCompanyInfoFromDomainName(domainName);

    await this.companyRepository.createCompany(
      workspaceId,
      {
        id: companyId,
        domainName,
        name,
        city,
      },
      companyDomainNameColumnName,
      transactionManager,
    );

    return companyId;
  }

  private async getCompanyInfoFromDomainName(domainName: string): Promise<{
    name: string;
    city: string;
  }> {
    try {
      const response = await this.httpService.get(`/${domainName}`);

      const data = response.data;

      return {
        name: data.name ?? getCompanyNameFromDomainName(domainName),
        city: data.city,
      };
    } catch (e) {
      return {
        name: getCompanyNameFromDomainName(domainName),
        city: '',
      };
    }
  }
}
