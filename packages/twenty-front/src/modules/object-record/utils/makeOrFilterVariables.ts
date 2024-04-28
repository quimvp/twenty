import { RecordGqlOperationFilter } from '@/object-record/graphql-operations/types/RecordGqlOperationFilter';
import { isDefined } from '~/utils/isDefined';

export const makeOrFilterVariables = (
  filters: (RecordGqlOperationFilter | undefined)[],
): RecordGqlOperationFilter | undefined => {
  const definedFilters = filters.filter(isDefined);

  if (!definedFilters.length) return undefined;

  return definedFilters.length === 1
    ? definedFilters[0]
    : { or: definedFilters };
};
