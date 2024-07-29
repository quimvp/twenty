import { EntityManager } from 'typeorm';

const tableName = 'company';

export const DEV_SEED_COMPANY_IDS = {
  LINKEDIN: '20202020-3ec3-4fe3-8997-b76aa0bfa408',
  FACEBOOK: '20202020-5d81-46d6-bf83-f7fd33ea6102',
  QONTO: '20202020-0713-40a5-8216-82802401d33e',
  MICROSOFT: '20202020-ed89-413a-b31a-962986e67bb4',
  AIRBNB: '20202020-171e-4bcc-9cf7-43448d6fb278',
  GOOGLE: '20202020-c21e-4ec2-873b-de4264d89025',
  NETFLIX: '20202020-707e-44dc-a1d2-30030bf1a944',
  LIBEO: '20202020-3f74-492d-a101-2a70f50a1645',
  CLAAP: '20202020-cfbf-4156-a790-e39854dcd4eb',
  HASURA: '20202020-f86b-419f-b794-02319abe8637',
  WEWORK: '20202020-5518-4553-9433-42d8eb82834b',
  SAMSUNG: '20202020-f79e-40dd-bd06-c36e6abb4678',
  ALGOLIA: '20202020-1455-4c57-afaf-dd5dc086361d',
};

export const seedCompanies = async (
  entityManager: EntityManager,
  schemaName: string,
) => {
  await entityManager
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${tableName}`, [
      'id',
      'name',
      'domainNamePrimaryLinkUrl',
      'addressAddressStreet1',
      'addressAddressStreet2',
      'addressAddressCity',
      'addressAddressState',
      'addressAddressPostcode',
      'addressAddressCountry',
      'position',
    ])
    .orIgnore()
    .values([
      {
        id: DEV_SEED_COMPANY_IDS.LINKEDIN,
        name: 'Linkedin',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://linkedin.com' },
        addressAddressStreet1: 'Eutaw Street',
        addressAddressStreet2: null,
        addressAddressCity: 'Dublin',
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: 'Ireland',
        position: 1,
      },
      {
        id: DEV_SEED_COMPANY_IDS.FACEBOOK,
        name: 'Facebook',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://facebook.com' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 2,
      },
      {
        id: DEV_SEED_COMPANY_IDS.QONTO,
        name: 'Qonto',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://qonto.com' },
        addressAddressStreet1: '18 rue de navarrin',
        addressAddressStreet2: null,
        addressAddressCity: 'Paris',
        addressAddressState: null,
        addressAddressPostcode: '75009',
        addressAddressCountry: 'France',
        position: 3,
      },
      {
        id: DEV_SEED_COMPANY_IDS.MICROSOFT,
        name: 'Microsoft',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://microsoft.com' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 4,
      },
      {
        id: DEV_SEED_COMPANY_IDS.AIRBNB,
        name: 'Airbnb',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://airbnb.com' },
        addressAddressStreet1: '888 Brannan St',
        addressAddressStreet2: null,
        addressAddressCity: 'San Francisco',
        addressAddressState: 'CA',
        addressAddressPostcode: '94103',
        addressAddressCountry: 'United States',
        position: 5,
      },
      {
        id: DEV_SEED_COMPANY_IDS.GOOGLE,
        name: 'Google',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://google.com' },
        addressAddressStreet1: '760 Market St',
        addressAddressStreet2: 'Floor 10',
        addressAddressCity: 'San Francisco',
        addressAddressState: null,
        addressAddressPostcode: '94102',
        addressAddressCountry: 'United States',
        position: 6,
      },
      {
        id: DEV_SEED_COMPANY_IDS.NETFLIX,
        name: 'Netflix',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://netflix.com' },
        addressAddressStreet1: '2300 Harrison St',
        addressAddressStreet2: null,
        addressAddressCity: 'San Francisco',
        addressAddressState: 'CA',
        addressAddressPostcode: '94110',
        addressAddressCountry: 'United States',
        position: 7,
      },
      {
        id: DEV_SEED_COMPANY_IDS.LIBEO,
        name: 'Libeo',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://libeo.io' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 8,
      },
      {
        id: DEV_SEED_COMPANY_IDS.CLAAP,
        name: 'Claap',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://claap.io' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 9,
      },
      {
        id: DEV_SEED_COMPANY_IDS.HASURA,
        name: 'Hasura',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://hasura.io' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 10,
      },
      {
        id: DEV_SEED_COMPANY_IDS.WEWORK,
        name: 'Wework',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://wework.com' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 11,
      },
      {
        id: DEV_SEED_COMPANY_IDS.SAMSUNG,
        name: 'Samsung',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://samsung.com' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 12,
      },
      {
        id: DEV_SEED_COMPANY_IDS.ALGOLIA,
        name: 'Algolia',
        domainNamePrimaryLinkUrl: { primarlyLinkUrl: 'https://algolia.com' },
        addressAddressStreet1: null,
        addressAddressStreet2: null,
        addressAddressCity: null,
        addressAddressState: null,
        addressAddressPostcode: null,
        addressAddressCountry: null,
        position: 13,
      },
    ])
    .execute();
};
