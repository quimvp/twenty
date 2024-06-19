import { useRecoilCallback } from 'recoil';

import { useRecordBoardStates } from '@/object-record/record-board/hooks/internal/useRecordBoardStates';
import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { sortRecordsByPosition } from '@/object-record/utils/sortRecordsByPosition';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';

export const useSetRecordBoardRecordIds = (recordBoardId?: string) => {
  const {
    scopeId,
    recordIdsByColumnIdFamilyState,
    columnsFamilySelector,
    columnIdsState,
    kanbanFieldMetadataNameState,
  } = useRecordBoardStates(recordBoardId);

  const setRecordIds = useRecoilCallback(
    ({ set, snapshot }) =>
      (records: ObjectRecord[]) => {
        const columnIds = snapshot.getLoadable(columnIdsState).getValue();

        columnIds.forEach((columnId) => {
          const column = snapshot
            .getLoadable(columnsFamilySelector(columnId))
            .getValue();

          const existingColumnRecordIds = snapshot
            .getLoadable(recordIdsByColumnIdFamilyState(columnId))
            .getValue();

          const kanbanFieldMetadataName = snapshot
            .getLoadable(kanbanFieldMetadataNameState)
            .getValue();

          if (!kanbanFieldMetadataName) {
            return;
          }

          const columnRecordIds = records
            .filter(
              (record) => record[kanbanFieldMetadataName] === column?.value,
            )
            .sort(sortRecordsByPosition)
            .map((record) => record.id);

          if (!isDeeplyEqual(existingColumnRecordIds, columnRecordIds)) {
            set(recordIdsByColumnIdFamilyState(columnId), columnRecordIds);
          }
        });
      },
    [
      columnIdsState,
      columnsFamilySelector,
      recordIdsByColumnIdFamilyState,
      kanbanFieldMetadataNameState,
    ],
  );

  return {
    scopeId,
    setRecordIds,
  };
};
