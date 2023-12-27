import { objectMetadataConfigScopedState } from '@/object-record/record-table/states/objectMetadataConfigScopedState';
import { tableLastRowVisibleScopedState } from '@/object-record/record-table/states/tableLastRowVisibleScopedState';
import { getScopeInjector } from '@/ui/utilities/recoil-scope/utils/getScopeInjector';
import { getSelectorScopeInjector } from '@/ui/utilities/recoil-scope/utils/getSelectorScopeInjector';

import { availableTableColumnsScopedState } from '../states/availableTableColumnsScopedState';
import { onColumnsChangeScopedState } from '../states/onColumnsChangeScopedState';
import { onEntityCountChangeScopedState } from '../states/onEntityCountChangeScopedState';
import { hiddenTableColumnsScopedSelector } from '../states/selectors/hiddenTableColumnsScopedSelector';
import { tableColumnsByKeyScopedSelector } from '../states/selectors/tableColumnsByKeyScopedSelector';
import { visibleTableColumnsScopedSelector } from '../states/selectors/visibleTableColumnsScopedSelector';
import { tableColumnsScopedState } from '../states/tableColumnsScopedState';
import { tableFiltersScopedState } from '../states/tableFiltersScopedState';
import { tableSortsScopedState } from '../states/tableSortsScopedState';

export const getRecordTableScopeInjector = () => {
  const availableTableColumnsScopeInjector = getScopeInjector(
    availableTableColumnsScopedState,
  );

  const tableFiltersScopeInjector = getScopeInjector(tableFiltersScopedState);

  const tableSortsScopeInjector = getScopeInjector(tableSortsScopedState);

  const tableColumnsScopeInjector = getScopeInjector(tableColumnsScopedState);

  const objectMetadataConfigScopeInjector = getScopeInjector(
    objectMetadataConfigScopedState,
  );

  const tableColumnsByKeyScopeInjector = getSelectorScopeInjector(
    tableColumnsByKeyScopedSelector,
  );

  const hiddenTableColumnsScopeInjector = getSelectorScopeInjector(
    hiddenTableColumnsScopedSelector,
  );

  const visibleTableColumnsScopeInjector = getSelectorScopeInjector(
    visibleTableColumnsScopedSelector,
  );

  const onColumnsChangeScopeInjector = getScopeInjector(
    onColumnsChangeScopedState,
  );

  const onEntityCountScopeInjector = getScopeInjector(
    onEntityCountChangeScopedState,
  );

  const tableLastRowVisibleScopeInjector = getScopeInjector(
    tableLastRowVisibleScopedState,
  );

  return {
    availableTableColumnsScopeInjector,
    tableFiltersScopeInjector,
    tableSortsScopeInjector,
    tableColumnsScopeInjector,
    objectMetadataConfigScopeInjector,
    tableColumnsByKeyScopeInjector,
    hiddenTableColumnsScopeInjector,
    visibleTableColumnsScopeInjector,
    onColumnsChangeScopeInjector,
    onEntityCountScopeInjector,
    tableLastRowVisibleScopeInjector,
  };
};
