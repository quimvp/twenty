import styled from '@emotion/styled';

import { useOpenCreateActivityDrawerV2 } from '@/activities/hooks/useOpenCreateActivityDrawerV2';
import { ActivityType } from '@/activities/types/Activity';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { PageHotkeyScope } from '@/types/PageHotkeyScope';
import { IconCheckbox, IconNotes, IconPlus } from '@/ui/display/icon/index';
import { IconButton } from '@/ui/input/button/components/IconButton';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';

import { Dropdown } from '../../dropdown/components/Dropdown';
import { DropdownMenu } from '../../dropdown/components/DropdownMenu';

const StyledContainer = styled.div`
  z-index: 1;
`;

export const ShowPageAddButton = ({
  activityTargetObject,
}: {
  activityTargetObject: ActivityTargetableObject;
}) => {
  const { closeDropdown, toggleDropdown } = useDropdown('add-show-page');
  const openCreateActivity = useOpenCreateActivityDrawerV2({
    targetableObject: activityTargetObject,
  });

  const handleSelect = (type: ActivityType) => {
    openCreateActivity({ type, targetableObjects: [activityTargetObject] });
    closeDropdown();
  };

  return (
    <StyledContainer>
      <Dropdown
        dropdownId="show-page-add-button-dropdown-id"
        clickableComponent={
          <IconButton
            Icon={IconPlus}
            size="medium"
            dataTestId="add-showpage-button"
            accent="default"
            variant="secondary"
            onClick={toggleDropdown}
          />
        }
        dropdownComponents={
          <DropdownMenu>
            <DropdownMenuItemsContainer>
              <MenuItem
                onClick={() => handleSelect('Note')}
                accent="default"
                LeftIcon={IconNotes}
                text="Note"
              />
              <MenuItem
                onClick={() => handleSelect('Task')}
                accent="default"
                LeftIcon={IconCheckbox}
                text="Task"
              />
            </DropdownMenuItemsContainer>
          </DropdownMenu>
        }
        dropdownHotkeyScope={{
          scope: PageHotkeyScope.ShowPage,
        }}
      />
    </StyledContainer>
  );
};
