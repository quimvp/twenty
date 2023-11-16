import { QueryHookOptions, QueryResult } from '@apollo/client';
import { isNonEmptyString } from '@sniptt/guards';

import { mapPaginatedObjectsToObjects } from '@/object-record/utils/mapPaginatedObjectsToObjects';
import { EntitiesForMultipleEntitySelect } from '@/ui/input/relation-picker/components/MultipleEntitySelect';
import { EntityForSelect } from '@/ui/input/relation-picker/types/EntityForSelect';
import { isDefined } from '~/utils/isDefined';

type SelectStringKeys<T> = NonNullable<
  {
    [K in keyof T]: K extends '__typename'
      ? never
      : T[K] extends string | undefined | null
      ? K
      : never;
  }[keyof T]
>;

type ExtractEntityTypeFromQueryResponse<T> = T extends {
  searchResults: Array<infer U>;
}
  ? U
  : never;

type SearchFilter = { fieldNames: string[]; filter: string | number };

export type OrderBy =
  | 'AscNullsLast'
  | 'DescNullsLast'
  | 'AscNullsFirst'
  | 'DescNullsFirst';

const DEFAULT_SEARCH_REQUEST_LIMIT = 30;

// TODO: use this for all search queries, because we need selectedEntities and entitiesToSelect each time we want to search
// Filtered entities to select are
export const useFilteredSearchEntityQueryV2 = ({
  queryHook,
  orderByField,
  filters,
  sortOrder = 'AscNullsLast',
  selectedIds,
  mappingFunction,
  limit,
  excludeEntityIds = [],
  objectNamePlural,
}: {
  queryHook: (
    queryOptions?: QueryHookOptions<any, any>,
  ) => QueryResult<any, any>;
  orderByField: string;
  filters: SearchFilter[];
  sortOrder?: OrderBy;
  selectedIds: string[];
  mappingFunction: (entity: any) => EntityForSelect;
  limit?: number;
  excludeEntityIds?: string[];
  objectNamePlural: string;
}): EntitiesForMultipleEntitySelect<EntityForSelect> => {
  const { loading: selectedEntitiesLoading, data: selectedEntitiesData } =
    queryHook({
      variables: {
        filter: {
          id: {
            in: selectedIds,
          },
        },
        orderBy: {
          [orderByField]: sortOrder,
        },
      } as any,
    });

  const searchFilter = filters
    .map(({ fieldNames, filter }) => {
      if (!isNonEmptyString(filter)) {
        return undefined;
      }

      return {
        or: fieldNames.map((fieldName) => ({
          [fieldName]: {
            like: `%${filter}%`,
            // TODO: fix mode
            // mode: QueryMode.Insensitive,
          },
        })),
      };
    })
    .filter(isDefined);

  const {
    loading: filteredSelectedEntitiesLoading,
    data: filteredSelectedEntitiesData,
  } = queryHook({
    variables: {
      filter: {
        and: [
          {
            and: searchFilter,
          },
          {
            not: {
              id: {
                in: selectedIds,
              },
            },
          },
        ],
      },
      orderBy: {
        [orderByField]: sortOrder,
      },
    } as any,
  });

  const { loading: entitiesToSelectLoading, data: entitiesToSelectData } =
    queryHook({
      variables: {
        filter: {
          and: [
            {
              and: searchFilter,
            },
            {
              not: {
                id: {
                  in: [...selectedIds, ...excludeEntityIds],
                },
              },
            },
          ],
        },
        limit: limit ?? DEFAULT_SEARCH_REQUEST_LIMIT,
        orderBy: {
          [orderByField]: sortOrder,
        },
      } as any,
    });

  return {
    selectedEntities: mapPaginatedObjectsToObjects({
      objectNamePlural: objectNamePlural,
      pagedObjects: selectedEntitiesData,
    }).map(mappingFunction),
    filteredSelectedEntities: mapPaginatedObjectsToObjects({
      objectNamePlural: objectNamePlural,
      pagedObjects: filteredSelectedEntitiesData,
    }).map(mappingFunction),
    entitiesToSelect: mapPaginatedObjectsToObjects({
      objectNamePlural: objectNamePlural,
      pagedObjects: entitiesToSelectData,
    }).map(mappingFunction),
    loading:
      entitiesToSelectLoading ||
      filteredSelectedEntitiesLoading ||
      selectedEntitiesLoading,
  };
};
