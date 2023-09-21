import { useRef } from 'react';

import { DropdownMenuSearchInput } from '@/ui/dropdown/components/DropdownMenuSearchInput';
import { StyledDropdownMenu } from '@/ui/dropdown/components/StyledDropdownMenu';
import { StyledDropdownMenuItemsContainer } from '@/ui/dropdown/components/StyledDropdownMenuItemsContainer';
import { StyledDropdownMenuSeparator } from '@/ui/dropdown/components/StyledDropdownMenuSeparator';
import { IconPlus } from '@/ui/icon';
import { useListenClickOutside } from '@/ui/utilities/pointer-event/hooks/useListenClickOutside';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { isDefined } from '~/utils/isDefined';

import { CreateButtonId } from '../constants';
import { useEntitySelectSearch } from '../hooks/useEntitySelectSearch';
import { RelationPickerRecoilScopeContext } from '../states/recoil-scope-contexts/RelationPickerRecoilScopeContext';
import { relationPickerHoveredIdScopedState } from '../states/relationPickerHoveredIdScopedState';
import { EntityForSelect } from '../types/EntityForSelect';

import { StyledCreateNewButton } from './CreateNewButton';
import {
  SingleEntitySelectBase,
  type SingleEntitySelectBaseProps,
} from './SingleEntitySelectBase';

export type SingleEntitySelectProps<
  CustomEntityForSelect extends EntityForSelect,
> = {
  disableBackgroundBlur?: boolean;
  onCreate?: () => void;
  width?: number;
} & Pick<
  SingleEntitySelectBaseProps<CustomEntityForSelect>,
  | 'EmptyIcon'
  | 'emptyLabel'
  | 'entitiesToSelect'
  | 'loading'
  | 'onCancel'
  | 'onEntitySelected'
  | 'selectedEntity'
>;

export const SingleEntitySelect = <
  CustomEntityForSelect extends EntityForSelect,
>({
  disableBackgroundBlur = false,
  onCancel,
  onCreate,
  width,
  ...props
}: SingleEntitySelectProps<CustomEntityForSelect>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [relationPickerHoveredId] = useRecoilScopedState(
    relationPickerHoveredIdScopedState,
    RelationPickerRecoilScopeContext,
  );
  const { searchFilter, handleSearchFilterChange } = useEntitySelectSearch();

  const showCreateButton = isDefined(onCreate) && searchFilter !== '';

  useListenClickOutside({
    refs: [containerRef],
    callback: (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();

      onCancel?.();
    },
  });

  return (
    <StyledDropdownMenu
      disableBlur={disableBackgroundBlur}
      ref={containerRef}
      width={width}
    >
      <DropdownMenuSearchInput
        value={searchFilter}
        onChange={handleSearchFilterChange}
        autoFocus
      />
      <StyledDropdownMenuSeparator />
      <SingleEntitySelectBase
        {...props}
        onCancel={onCancel}
        onCreateHandler={onCreate}
        showCreateButton={showCreateButton}
      />
      {showCreateButton && (
        <>
          <StyledDropdownMenuItemsContainer hasMaxHeight>
            <StyledDropdownMenuSeparator />
            <StyledCreateNewButton
              onClick={onCreate}
              LeftIcon={IconPlus}
              text="Add New"
              hovered={relationPickerHoveredId === CreateButtonId}
            />
          </StyledDropdownMenuItemsContainer>
        </>
      )}
    </StyledDropdownMenu>
  );
};
