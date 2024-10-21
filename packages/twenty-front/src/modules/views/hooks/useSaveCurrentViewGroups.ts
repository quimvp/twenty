import { useRecoilCallback } from 'recoil';

import { useRecoilComponentCallbackStateV2 } from '@/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useGetViewFromCache } from '@/views/hooks/useGetViewFromCache';
import { currentViewIdComponentState } from '@/views/states/currentViewIdComponentState';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';
import { isDefined } from '~/utils/isDefined';
import { isUndefinedOrNull } from '~/utils/isUndefinedOrNull';
import { usePersistViewGroupRecords } from '@/views/hooks/internal/usePersistViewGroupRecords';
import { ViewGroup } from '@/views/types/ViewGroup';
import { isPersistingViewGroupsComponentState } from '@/views/states/isPersistingViewGroupsComponentState';

export const useSaveCurrentViewGroups = (viewBarComponentId?: string) => {
  const { createViewGroupRecords, updateViewGroupRecords } =
    usePersistViewGroupRecords();

  const { getViewFromCache } = useGetViewFromCache();

  const currentViewIdCallbackState = useRecoilComponentCallbackStateV2(
    currentViewIdComponentState,
    viewBarComponentId,
  );

  const isPersistingViewGroupsCallbackState = useRecoilComponentCallbackStateV2(
    isPersistingViewGroupsComponentState,
    viewBarComponentId,
  );

  const saveViewGroups = useRecoilCallback(
    ({ set, snapshot }) =>
      async (viewGroupsToSave: ViewGroup[]) => {
        const currentViewId = snapshot
          .getLoadable(currentViewIdCallbackState)
          .getValue();

        if (!currentViewId) {
          return;
        }

        set(isPersistingViewGroupsCallbackState, true);

        const view = await getViewFromCache(currentViewId);

        if (isUndefinedOrNull(view)) {
          return;
        }

        const currentViewGroups = view.viewGroups;

        const viewGroupsToUpdate = viewGroupsToSave
          .map((viewGroupToSave) => {
            const existingField = currentViewGroups.find(
              (currentViewGroup) =>
                currentViewGroup.fieldValue === viewGroupToSave.fieldValue,
            );

            if (isUndefinedOrNull(existingField)) {
              return undefined;
            }

            if (
              isDeeplyEqual(
                {
                  position: existingField.position,
                  isVisible: existingField.isVisible,
                },
                {
                  position: viewGroupToSave.position,
                  isVisible: viewGroupToSave.isVisible,
                },
              )
            ) {
              return undefined;
            }

            return { ...viewGroupToSave, id: existingField.id };
          })
          .filter(isDefined);

        const viewGroupsToCreate = viewGroupsToSave.filter(
          (viewFieldToSave) =>
            !currentViewGroups.some(
              (currentViewGroup) =>
                currentViewGroup.fieldValue === viewFieldToSave.fieldValue,
            ),
        );

        await Promise.all([
          createViewGroupRecords(viewGroupsToCreate, view),
          updateViewGroupRecords(viewGroupsToUpdate),
        ]);

        set(isPersistingViewGroupsCallbackState, false);
      },
    [
      createViewGroupRecords,
      currentViewIdCallbackState,
      getViewFromCache,
      isPersistingViewGroupsCallbackState,
      updateViewGroupRecords,
    ],
  );

  return {
    saveViewGroups,
  };
};