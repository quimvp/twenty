import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useSort } from '@/ui/data/sort/hooks/useSort';
import { Sort } from '@/ui/data/view-bar/types/Sort';
import { savedSortsFamilyState } from '@/views/states/savedSortsFamilyState';
import { savedSortsByKeyFamilySelector } from '@/views/states/selectors/savedSortsByKeyFamilySelector';
import {
  useCreateViewSortsMutation,
  useDeleteViewSortsMutation,
  useGetViewSortsQuery,
  useUpdateViewSortMutation,
  ViewSortDirection,
} from '~/generated/graphql';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';

import { useView } from './useView';

export const useViewSorts = ({
  viewScopeId,
  sortScopeId,
  skipFetch,
}: {
  viewScopeId: string;
  sortScopeId?: string;
  skipFetch?: boolean;
}) => {
  const { currentViewId, availableSorts } = useView({
    viewScopeId: viewScopeId,
  });

  const { sorts, setSorts } = useSort({
    sortScopeId: sortScopeId,
  });

  const [, setSavedSorts] = useRecoilState(
    savedSortsFamilyState({
      scopeId: viewScopeId,
      familyKey: currentViewId || '',
    }),
  );
  const savedSortsByKey = useRecoilValue(
    savedSortsByKeyFamilySelector({
      scopeId: viewScopeId,
      viewId: currentViewId || '',
    }),
  );

  const { refetch } = useGetViewSortsQuery({
    skip: !currentViewId || skipFetch,
    variables: {
      where: {
        viewId: { equals: currentViewId },
      },
    },
    onCompleted: (data) => {
      const nextSorts = data.viewSorts
        .map((viewSort) => {
          const foundCorrespondingSortDefinition = availableSorts.find(
            (sort) => sort.key === viewSort.key,
          );

          if (foundCorrespondingSortDefinition) {
            return {
              key: viewSort.key,
              definition: foundCorrespondingSortDefinition,
              direction: viewSort.direction.toLowerCase(),
            } as Sort;
          } else {
            return undefined;
          }
        })
        .filter((sort): sort is Sort => !!sort);

      if (!isDeeplyEqual(sorts, nextSorts)) {
        setSavedSorts(nextSorts);
        setSorts(nextSorts);
      }
    },
  });

  const [createViewSortsMutation] = useCreateViewSortsMutation();
  const [updateViewSortMutation] = useUpdateViewSortMutation();
  const [deleteViewSortsMutation] = useDeleteViewSortsMutation();

  const createViewSorts = useCallback(
    (sorts: Sort[], viewId = currentViewId) => {
      if (!viewId || !sorts.length) return;

      return createViewSortsMutation({
        variables: {
          data: sorts.map((sort) => ({
            key: sort.key,
            direction: sort.direction as ViewSortDirection,
            name: sort.definition.label,
            viewId,
          })),
        },
      });
    },
    [createViewSortsMutation, currentViewId],
  );

  const updateViewSorts = useCallback(
    (sorts: Sort[]) => {
      if (!currentViewId || !sorts.length) return;

      return Promise.all(
        sorts.map((sort) =>
          updateViewSortMutation({
            variables: {
              data: {
                direction: sort.direction as ViewSortDirection,
              },
              where: {
                viewId_key: { key: sort.key, viewId: currentViewId },
              },
            },
          }),
        ),
      );
    },
    [currentViewId, updateViewSortMutation],
  );

  const deleteViewSorts = useCallback(
    (sortKeys: string[]) => {
      if (!currentViewId || !sortKeys.length) return;

      return deleteViewSortsMutation({
        variables: {
          where: {
            key: { in: sortKeys },
            viewId: { equals: currentViewId },
          },
        },
      });
    },
    [currentViewId, deleteViewSortsMutation],
  );

  const persistSorts = useCallback(async () => {
    if (!currentViewId) return;

    const sortsToCreate = sorts.filter((sort) => !savedSortsByKey[sort.key]);
    await createViewSorts(sortsToCreate);

    const sortsToUpdate = sorts.filter(
      (sort) =>
        savedSortsByKey[sort.key] &&
        savedSortsByKey[sort.key].direction !== sort.direction,
    );
    await updateViewSorts(sortsToUpdate);

    const sortKeys = sorts.map((sort) => sort.key);
    const sortKeysToDelete = Object.keys(savedSortsByKey).filter(
      (previousSortKey) => !sortKeys.includes(previousSortKey),
    );
    await deleteViewSorts(sortKeysToDelete);

    return refetch();
  }, [
    currentViewId,
    sorts,
    createViewSorts,
    updateViewSorts,
    savedSortsByKey,
    deleteViewSorts,
    refetch,
  ]);

  return { createViewSorts, persistSorts };
};
