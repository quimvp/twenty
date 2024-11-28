import { useRecoilCallback } from 'recoil';

import { recordGroupDefinitionFamilyState } from '@/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { recordGroupFieldMetadataComponentState } from '@/object-record/record-group/states/recordGroupFieldMetadataComponentState';
import { visibleRecordGroupIdsComponentSelector } from '@/object-record/record-group/states/selectors/visibleRecordGroupIdsComponentSelector';
import { recordIndexRowIdsByGroupComponentFamilyState } from '@/object-record/record-index/states/recordIndexRowIdsByGroupComponentFamilyState';
import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { sortRecordsByPosition } from '@/object-record/utils/sortRecordsByPosition';
import { useRecoilComponentCallbackStateV2 } from '@/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { getSnapshotValue } from '@/ui/utilities/state/utils/getSnapshotValue';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';
import { isDefined } from '~/utils/isDefined';

export const useSetRecordBoardRecordIds = (recordBoardId?: string) => {
  const visibleRecordGroupIdsSelector = useRecoilComponentCallbackStateV2(
    visibleRecordGroupIdsComponentSelector,
  );

  const recordGroupFieldMetadataState = useRecoilComponentCallbackStateV2(
    recordGroupFieldMetadataComponentState,
    recordBoardId,
  );

  const recordIndexRowIdsByGroupFamilyState = useRecoilComponentCallbackStateV2(
    recordIndexRowIdsByGroupComponentFamilyState,
    recordBoardId,
  );

  const setRecordIds = useRecoilCallback(
    ({ set, snapshot }) =>
      (records: ObjectRecord[]) => {
        const recordGroupIds = getSnapshotValue(
          snapshot,
          visibleRecordGroupIdsSelector,
        );

        for (const recordGroupId of recordGroupIds) {
          const recordGroup = getSnapshotValue(
            snapshot,
            recordGroupDefinitionFamilyState(recordGroupId),
          );

          const existingRecordGroupRowIds = getSnapshotValue(
            snapshot,
            recordIndexRowIdsByGroupFamilyState(recordGroupId),
          );

          const recordGroupFieldMetadata = getSnapshotValue(
            snapshot,
            recordGroupFieldMetadataState,
          );

          if (!isDefined(recordGroupFieldMetadata)) {
            return;
          }

          const recordGroupRowIds = records
            .filter(
              (record) =>
                record[recordGroupFieldMetadata.name] === recordGroup?.value,
            )
            .sort(sortRecordsByPosition)
            .map((record) => record.id);

          if (!isDeeplyEqual(existingRecordGroupRowIds, recordGroupRowIds)) {
            set(
              recordIndexRowIdsByGroupFamilyState(recordGroupId),
              recordGroupRowIds,
            );
          }
        }
      },
    [
      visibleRecordGroupIdsSelector,
      recordIndexRowIdsByGroupFamilyState,
      recordGroupFieldMetadataState,
    ],
  );

  return {
    setRecordIds,
  };
};
