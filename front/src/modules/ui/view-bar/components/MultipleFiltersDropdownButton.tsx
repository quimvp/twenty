import { ComponentType, Context, useCallback, useState } from 'react';

import { StyledDropdownMenuSeparator } from '@/ui/dropdown/components/StyledDropdownMenuSeparator';
import { useSetHotkeyScope } from '@/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { filterDefinitionUsedInDropdownScopedState } from '@/ui/view-bar/states/filterDefinitionUsedInDropdownScopedState';
import { filterDropdownSearchInputScopedState } from '@/ui/view-bar/states/filterDropdownSearchInputScopedState';
import { filtersScopedState } from '@/ui/view-bar/states/filtersScopedState';
import { isFilterDropdownOperandSelectUnfoldedScopedState } from '@/ui/view-bar/states/isFilterDropdownOperandSelectUnfoldedScopedState';
import { selectedOperandInDropdownScopedState } from '@/ui/view-bar/states/selectedOperandInDropdownScopedState';

import { isViewBarExpandedScopedState } from '../states/isViewBarExpandedScopedState';
import { FiltersHotkeyScope } from '../types/FiltersHotkeyScope';

import DropdownButton from './DropdownButton';
import { FilterDropdownDateSearchInput } from './FilterDropdownDateSearchInput';
import { FilterDropdownEntitySearchInput } from './FilterDropdownEntitySearchInput';
import { FilterDropdownEntitySelect } from './FilterDropdownEntitySelect';
import { FilterDropdownFilterSelect } from './FilterDropdownFilterSelect';
import { FilterDropdownNumberSearchInput } from './FilterDropdownNumberSearchInput';
import { FilterDropdownOperandButton } from './FilterDropdownOperandButton';
import { FilterDropdownOperandSelect } from './FilterDropdownOperandSelect';
import { FilterDropdownTextSearchInput } from './FilterDropdownTextSearchInput';

type OwnProps<T> = {
  context: Context<string | null>;
  hotkeyScope: FiltersHotkeyScope;
  isPrimaryButton?: boolean;
  Icon?: ComponentType<T>;
  color?: string;
  label?: string;
};

export function MultipleFiltersDropdownButton<
  T extends Record<string, unknown>,
>({
  context,
  hotkeyScope,
  isPrimaryButton = false,
  color,
  Icon,
  label,
}: OwnProps<T>) {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const [
    isFilterDropdownOperandSelectUnfolded,
    setIsFilterDropdownOperandSelectUnfolded,
  ] = useRecoilScopedState(
    isFilterDropdownOperandSelectUnfoldedScopedState,
    context,
  );

  const [filterDefinitionUsedInDropdown, setFilterDefinitionUsedInDropdown] =
    useRecoilScopedState(filterDefinitionUsedInDropdownScopedState, context);

  const [, setFilterDropdownSearchInput] = useRecoilScopedState(
    filterDropdownSearchInputScopedState,
    context,
  );

  const [filters] = useRecoilScopedState(filtersScopedState, context);

  const [selectedOperandInDropdown, setSelectedOperandInDropdown] =
    useRecoilScopedState(selectedOperandInDropdownScopedState, context);

  const resetState = useCallback(() => {
    setIsFilterDropdownOperandSelectUnfolded(false);
    setFilterDefinitionUsedInDropdown(null);
    setSelectedOperandInDropdown(null);
    setFilterDropdownSearchInput('');
  }, [
    setFilterDefinitionUsedInDropdown,
    setSelectedOperandInDropdown,
    setFilterDropdownSearchInput,
    setIsFilterDropdownOperandSelectUnfolded,
  ]);

  const isFilterSelected = (filters?.length ?? 0) > 0;

  const setHotkeyScope = useSetHotkeyScope();

  const [isViewBarExpanded, setIsViewBarExpanded] = useRecoilScopedState(
    isViewBarExpandedScopedState,
    context,
  );

  function handleIsUnfoldedChange(unfolded: boolean) {
    if (unfolded && isPrimaryButton) {
      setIsViewBarExpanded(!isViewBarExpanded);
    }

    if (
      unfolded &&
      ((isPrimaryButton && !isFilterSelected) || !isPrimaryButton)
    ) {
      setHotkeyScope(hotkeyScope);
      setIsUnfolded(true);
      return;
    }

    if (filterDefinitionUsedInDropdown?.type === 'entity') {
      setHotkeyScope(hotkeyScope);
    }

    setIsUnfolded(false);
    resetState();
  }

  return (
    <DropdownButton
      label={label ?? 'Filter'}
      isActive={isFilterSelected}
      isUnfolded={isUnfolded}
      Icon={Icon}
      onIsUnfoldedChange={handleIsUnfoldedChange}
      hotkeyScope={hotkeyScope}
      color={color}
      menuWidth={
        selectedOperandInDropdown &&
        filterDefinitionUsedInDropdown?.type === 'date'
          ? 'auto'
          : undefined
      }
    >
      {!filterDefinitionUsedInDropdown ? (
        <FilterDropdownFilterSelect context={context} />
      ) : isFilterDropdownOperandSelectUnfolded ? (
        <FilterDropdownOperandSelect context={context} />
      ) : (
        selectedOperandInDropdown && (
          <>
            <FilterDropdownOperandButton context={context} />
            <StyledDropdownMenuSeparator />
            {filterDefinitionUsedInDropdown.type === 'text' && (
              <FilterDropdownTextSearchInput context={context} />
            )}
            {filterDefinitionUsedInDropdown.type === 'number' && (
              <FilterDropdownNumberSearchInput context={context} />
            )}
            {filterDefinitionUsedInDropdown.type === 'date' && (
              <FilterDropdownDateSearchInput context={context} />
            )}
            {filterDefinitionUsedInDropdown.type === 'entity' && (
              <FilterDropdownEntitySearchInput context={context} />
            )}
            {filterDefinitionUsedInDropdown.type === 'entity' && (
              <FilterDropdownEntitySelect context={context} />
            )}
          </>
        )
      )}
    </DropdownButton>
  );
}
