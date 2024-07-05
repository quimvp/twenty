import { ReactNode, useContext } from 'react';
import { useRecoilValue } from 'recoil';

import { RecordTableTd } from '@/object-record/record-table/components/RecordTableTd';
import { RecordTableRowContext } from '@/object-record/record-table/contexts/RecordTableRowContext';
import { isRecordTableScrolledLeftState } from '@/object-record/record-table/states/isRecordTableScrolledLeftState';
import { isRecordTableScrolledTopComponentState } from '@/object-record/record-table/states/isRecordTableScrolledTopComponentState';
import { useRecoilComponentValue } from '@/ui/utilities/state/component-state/hooks/useRecoilComponentValue';

export const RecordTableCellTdFirstDataColumn = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isSelected } = useContext(RecordTableRowContext);

  const isRecordTableScrolledLeft = useRecoilValue(
    isRecordTableScrolledLeftState,
  );
  const isRecordTableScrolledTop = useRecoilComponentValue(
    isRecordTableScrolledTopComponentState,
  );

  const zIndex =
    !isRecordTableScrolledLeft && !isRecordTableScrolledTop
      ? 5
      : !isRecordTableScrolledLeft
        ? 4
        : !isRecordTableScrolledTop
          ? 1
          : 1;

  return (
    <RecordTableTd isSelected={isSelected} sticky left={39} zIndex={zIndex}>
      {children}
    </RecordTableTd>
  );
};

export const RecordTableCellTd = ({
  firstColumn,
  children,
}: {
  firstColumn?: boolean;
  children: ReactNode;
}) => {
  const { isSelected } = useContext(RecordTableRowContext);

  return firstColumn === true ? (
    <RecordTableCellTdFirstDataColumn>
      {children}
    </RecordTableCellTdFirstDataColumn>
  ) : (
    <RecordTableTd isSelected={isSelected} zIndex={1}>
      {children}
    </RecordTableTd>
  );
};
