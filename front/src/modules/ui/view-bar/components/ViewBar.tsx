import type { ComponentProps, ComponentType, Context } from 'react';

import { useDropdownButton } from '@/ui/dropdown/hooks/useDropdownButton';
import { TopBar } from '@/ui/top-bar/TopBar';

import { FiltersHotkeyScope } from '../types/FiltersHotkeyScope';
import { ViewsHotkeyScope } from '../types/ViewsHotkeyScope';

import { FilterDropdownButton } from './FilterDropdownButton';
import {
  SortDropdownButton,
  type SortDropdownButtonProps,
} from './SortDropdownButton';
import {
  UpdateViewButtonGroup,
  type UpdateViewButtonGroupProps,
} from './UpdateViewButtonGroup';
import ViewBarDetails, { type ViewBarDetailsProps } from './ViewBarDetails';
import {
  ViewsDropdownButton,
  type ViewsDropdownButtonProps,
} from './ViewsDropdownButton';

export type ViewBarProps<SortField> = ComponentProps<'div'> & {
  OptionsDropdownButton: ComponentType;
  optionsDropdownKey: string;
  scopeContext: Context<string | null>;
} & Pick<
    ViewsDropdownButtonProps,
    'defaultViewName' | 'onViewsChange' | 'onViewSelect'
  > &
  Pick<SortDropdownButtonProps<SortField>, 'availableSorts'> &
  Pick<ViewBarDetailsProps, 'canPersistViewFields' | 'onReset'> &
  Pick<UpdateViewButtonGroupProps, 'onViewSubmit'>;

export const ViewBar = <SortField,>({
  availableSorts,
  canPersistViewFields,
  defaultViewName,
  onReset,
  onViewsChange,
  onViewSelect,
  onViewSubmit,
  OptionsDropdownButton,
  optionsDropdownKey,
  scopeContext,
  ...props
}: ViewBarProps<SortField>) => {
  const { openDropdownButton: openOptionsDropdownButton } = useDropdownButton({
    key: optionsDropdownKey,
  });

  return (
    <TopBar
      {...props}
      leftComponent={
        <ViewsDropdownButton
          defaultViewName={defaultViewName}
          onViewEditModeChange={openOptionsDropdownButton}
          onViewsChange={onViewsChange}
          onViewSelect={onViewSelect}
          HotkeyScope={ViewsHotkeyScope.ListDropdown}
          scopeContext={scopeContext}
        />
      }
      displayBottomBorder={false}
      rightComponent={
        <>
          <FilterDropdownButton
            context={scopeContext}
            HotkeyScope={FiltersHotkeyScope.FilterDropdownButton}
            isPrimaryButton
          />
          <SortDropdownButton<SortField>
            context={scopeContext}
            availableSorts={availableSorts}
            HotkeyScope={FiltersHotkeyScope.FilterDropdownButton}
            isPrimaryButton
          />
          <OptionsDropdownButton />
        </>
      }
      bottomComponent={
        <ViewBarDetails
          canPersistViewFields={canPersistViewFields}
          context={scopeContext}
          hasFilterButton
          onReset={onReset}
          rightComponent={
            <UpdateViewButtonGroup
              canPersistViewFields={canPersistViewFields}
              onViewEditModeChange={openOptionsDropdownButton}
              onViewSubmit={onViewSubmit}
              HotkeyScope={ViewsHotkeyScope.CreateDropdown}
              scopeContext={scopeContext}
            />
          }
        />
      }
    />
  );
};
