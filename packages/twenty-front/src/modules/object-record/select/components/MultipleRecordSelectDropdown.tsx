import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Avatar } from 'twenty-ui';

import { SelectableRecord } from '@/object-record/select/types/SelectableRecord';
import { DropdownMenuSkeletonItem } from '@/ui/input/relation-picker/components/skeletons/DropdownMenuSkeletonItem';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { SelectableList } from '@/ui/layout/selectable-list/components/SelectableList';
import { useSelectableListStates } from '@/ui/layout/selectable-list/hooks/internal/useSelectableListStates';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { MenuItemMultiSelectAvatar } from '@/ui/navigation/menu-item/components/MenuItemMultiSelectAvatar';
import { getImageAbsoluteURIOrBase64 } from '~/utils/image/getImageAbsoluteURIOrBase64';

export const MultipleRecordSelectDropdown = ({
  selectableListId,
  hotkeyScope,
  recordsToSelect,
  loadingRecords,
  filteredSelectedRecords,
  onChange,
  searchFilter,
}: {
  selectableListId: string;
  hotkeyScope: string;
  recordsToSelect: SelectableRecord[];
  filteredSelectedRecords: SelectableRecord[];
  selectedRecords: SelectableRecord[];
  searchFilter: string;
  onChange: (
    changedRecordToSelect: SelectableRecord,
    newSelectedValue: boolean,
  ) => void;
  loadingRecords: boolean;
}) => {
  const { selectedItemIdState } = useSelectableListStates({
    selectableListScopeId: selectableListId,
  });

  const selectedItemId = useRecoilValue(selectedItemIdState);

  const handleRecordSelectChange = (
    recordToSelect: SelectableRecord,
    newSelectedValue: boolean,
  ) => {
    onChange(
      {
        ...recordToSelect,
        isSelected: newSelectedValue,
      },
      newSelectedValue,
    );
  };

  const [recordsInDropdown, setRecordInDropdown] = useState([
    ...(filteredSelectedRecords ?? []),
    ...(recordsToSelect ?? []),
  ]);

  useEffect(() => {
    if (!loadingRecords) {
      setRecordInDropdown([
        ...(filteredSelectedRecords ?? []),
        ...(recordsToSelect ?? []),
      ]);
    }
  }, [recordsToSelect, filteredSelectedRecords, loadingRecords]);

  const showNoResult =
    recordsToSelect?.length === 0 &&
    searchFilter !== '' &&
    filteredSelectedRecords?.length === 0 &&
    !loadingRecords;

  const selectableItemIds = recordsInDropdown.map((record) => record.id);

  return (
    <SelectableList
      selectableListId={selectableListId}
      selectableItemIdArray={selectableItemIds}
      hotkeyScope={hotkeyScope}
      onEnter={(itemId) => {
        const record = recordsInDropdown.findIndex(
          (entity) => entity.id === itemId,
        );
        const recordIsSelectedInDropwdown = filteredSelectedRecords.find(
          (entity) => entity.id === itemId,
        );
        handleRecordSelectChange(
          recordsInDropdown[record],
          !recordIsSelectedInDropwdown,
        );
      }}
    >
      <DropdownMenuItemsContainer hasMaxHeight>
        {recordsInDropdown?.map((record) => {
          return (
            <MenuItemMultiSelectAvatar
              key={record.id}
              selected={record.isSelected}
              isKeySelected={record.id === selectedItemId}
              onSelectChange={(newCheckedValue) =>
                handleRecordSelectChange(record, newCheckedValue)
              }
              avatar={
                <Avatar
                  avatarUrl={getImageAbsoluteURIOrBase64(record.avatarUrl)}
                  entityId={record.id}
                  placeholder={record.name}
                  size="md"
                  type={record.avatarType ?? 'rounded'}
                />
              }
              text={record.name}
            />
          );
        })}
        {showNoResult && <MenuItem text="No result" />}
        {loadingRecords && <DropdownMenuSkeletonItem />}
      </DropdownMenuItemsContainer>
    </SelectableList>
  );
};
