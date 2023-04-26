import { QueryResult, gql, useQuery } from '@apollo/client';
import { SelectedSortType } from '../../components/table/table-header/SortAndFilterBar';
import { Order_By, Companies_Order_By } from '../../generated/graphql';
import { GraphqlQueryCompany } from '../../interfaces/company.interface';

export type OrderByFields =
  | keyof Companies_Order_By
  | 'company_domain'
  | 'company_name';

export type CompaniesSelectedSortType = SelectedSortType<OrderByFields>;

const mapOrder = (order: 'asc' | 'desc'): Order_By => {
  return order === 'asc' ? Order_By.Asc : Order_By.Desc;
};

export const reduceSortsToOrderBy = (
  sorts: Array<CompaniesSelectedSortType>,
): Companies_Order_By[] => {
  const mappedSorts = sorts.reduce((acc, sort) => {
    const id = sort.id;
    const order = mapOrder(sort.order);
    acc[id] = order;
    return acc;
  }, {} as Companies_Order_By);
  return [mappedSorts];
};

export const GET_COMPANIES = gql`
  query GetCompanies($orderBy: [companies_order_by!]) {
    companies(order_by: $orderBy) {
      id
      workspace_id
      company_domain
      company_name
      created_at
      address
      employees
      account_owner {
        id
        email
        displayName
      }
    }
  }
`;

export function useCompaniesQuery(
  orderBy: Companies_Order_By[],
): QueryResult<{ companies: GraphqlQueryCompany[] }> {
  return useQuery<{ companies: GraphqlQueryCompany[] }>(GET_COMPANIES, {
    variables: { orderBy },
  });
}

export const defaultOrderBy: Companies_Order_By[] = [
  {
    company_name: Order_By.Asc,
  },
];
