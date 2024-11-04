import styled from '@emotion/styled';
import { isNonEmptyString, isNull } from '@sniptt/guards';

import { RecordTableComponentInstance } from '@/object-record/record-table/components/RecordTableComponentInstance';
import { RecordTableContextProvider } from '@/object-record/record-table/components/RecordTableContextProvider';
import { RecordTableEmptyState } from '@/object-record/record-table/empty-state/components/RecordTableEmptyState';
import { useRecordTable } from '@/object-record/record-table/hooks/useRecordTable';
import { RecordTableBody } from '@/object-record/record-table/record-table-body/components/RecordTableBody';
import { RecordTableBodyEffect } from '@/object-record/record-table/record-table-body/components/RecordTableBodyEffect';
import { RecordTableBodyUnselectEffect } from '@/object-record/record-table/record-table-body/components/RecordTableBodyUnselectEffect';
import { RecordTableHeader } from '@/object-record/record-table/record-table-header/components/RecordTableHeader';
import { isRecordTableInitialLoadingComponentState } from '@/object-record/record-table/states/isRecordTableInitialLoadingComponentState';
import { recordTablePendingRecordIdComponentState } from '@/object-record/record-table/states/recordTablePendingRecordIdComponentState';
import { tableRowIdsComponentState } from '@/object-record/record-table/states/tableRowIdsComponentState';
import { DragSelect } from '@/ui/utilities/drag-select/components/DragSelect';
import { useRecoilComponentValueV2 } from '@/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useRef } from 'react';

const StyledTable = styled.table`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
`;

type RecordTableProps = {
  viewBarId: string;
  recordTableId: string;
  objectNameSingular: string;
  onColumnsChange: (columns: any) => void;
};

export const RecordTable = ({
  viewBarId,
  recordTableId,
  objectNameSingular,
  onColumnsChange,
}: RecordTableProps) => {
  const tableBodyRef = useRef<HTMLTableElement>(null);

  const isRecordTableInitialLoading = useRecoilComponentValueV2(
    isRecordTableInitialLoadingComponentState,
    recordTableId,
  );

  const tableRowIds = useRecoilComponentValueV2(
    tableRowIdsComponentState,
    recordTableId,
  );

  const pendingRecordId = useRecoilComponentValueV2(
    recordTablePendingRecordIdComponentState,
    recordTableId,
  );

  const { resetTableRowSelection, setRowSelected } = useRecordTable({
    recordTableId,
  });

  const recordTableIsEmpty =
    !isRecordTableInitialLoading &&
    tableRowIds.length === 0 &&
    isNull(pendingRecordId);

  if (!isNonEmptyString(objectNameSingular)) {
    return <></>;
  }

  return (
    <RecordTableComponentInstance
      recordTableId={recordTableId}
      onColumnsChange={onColumnsChange}
    >
      <RecordTableContextProvider
        objectNameSingular={objectNameSingular}
        recordTableId={recordTableId}
        viewBarId={viewBarId}
      >
        <RecordTableBodyEffect />
        <RecordTableBodyUnselectEffect
          tableBodyRef={tableBodyRef}
          recordTableId={recordTableId}
        />
        {recordTableIsEmpty ? (
          <RecordTableEmptyState />
        ) : (
          <>
            <StyledTable className="entity-table-cell" ref={tableBodyRef}>
              <RecordTableHeader
                objectMetadataNameSingular={objectNameSingular}
              />
              <RecordTableBody />
              <DragSelect
                dragSelectable={tableBodyRef}
                onDragSelectionStart={() => {
                  resetTableRowSelection();
                }}
                onDragSelectionChange={setRowSelected}
              />
            </StyledTable>
          </>
        )}
      </RecordTableContextProvider>
    </RecordTableComponentInstance>
  );
};
