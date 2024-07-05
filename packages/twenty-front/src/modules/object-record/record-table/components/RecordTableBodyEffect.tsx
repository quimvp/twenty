import { useContext, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDebouncedCallback } from 'use-debounce';

import { useLoadRecordIndexTable } from '@/object-record/record-index/hooks/useLoadRecordIndexTable';
import { RecordTableContext } from '@/object-record/record-table/contexts/RecordTableContext';
import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';
import { isRecordTableScrolledLeftState } from '@/object-record/record-table/states/isRecordTableScrolledLeftState';
import { isRecordTableScrolledTopComponentState } from '@/object-record/record-table/states/isRecordTableScrolledTopComponentState';
import { isFetchingMoreRecordsFamilyState } from '@/object-record/states/isFetchingMoreRecordsFamilyState';
import { scrollLeftState } from '@/ui/utilities/scroll/states/scrollLeftState';
import { scrollTopState } from '@/ui/utilities/scroll/states/scrollTopState';
import { useSetRecoilComponentState } from '@/ui/utilities/state/component-state/hooks/useSetRecoilComponentState';
import { useScrollRestoration } from '~/hooks/useScrollRestoration';

export const RecordTableBodyEffect = () => {
  const { objectNameSingular } = useContext(RecordTableContext);

  const {
    fetchMoreRecords: fetchMoreObjects,
    records,
    totalCount,
    setRecordTableData,
    loading,
    queryStateIdentifier,
  } = useLoadRecordIndexTable(objectNameSingular);

  const isFetchingMoreObjects = useRecoilValue(
    isFetchingMoreRecordsFamilyState(queryStateIdentifier),
  );

  const { tableLastRowVisibleState } = useRecordTableStates();

  const tableLastRowVisible = useRecoilValue(tableLastRowVisibleState);

  const scrollTop = useRecoilValue(scrollTopState);
  const setIsRecordTableScrolledTop = useSetRecoilComponentState(
    isRecordTableScrolledTopComponentState,
  );

  useEffect(() => {
    setIsRecordTableScrolledTop(scrollTop === 0);
  }, [scrollTop, setIsRecordTableScrolledTop]);

  const scrollLeft = useRecoilValue(scrollLeftState);
  const setIsRecordTableScrolledLeft = useSetRecoilState(
    isRecordTableScrolledLeftState,
  );

  useEffect(() => {
    setIsRecordTableScrolledLeft(scrollLeft === 0);
  }, [scrollLeft, setIsRecordTableScrolledLeft]);

  const rowHeight = 32;
  const viewportHeight = records.length * rowHeight;

  useScrollRestoration(viewportHeight);

  useEffect(() => {
    if (!loading) {
      setRecordTableData(records, totalCount);
    }
  }, [records, totalCount, setRecordTableData, loading]);

  const fetchMoreDebouncedIfRequested = useDebouncedCallback(async () => {
    // We are debouncing here to give the user some room to scroll if they want to within this throttle window
    await fetchMoreObjects();
  }, 100);

  useEffect(() => {
    if (!isFetchingMoreObjects && tableLastRowVisible) {
      fetchMoreDebouncedIfRequested();
    }
  }, [
    fetchMoreDebouncedIfRequested,
    isFetchingMoreObjects,
    tableLastRowVisible,
  ]);

  return <></>;
};
