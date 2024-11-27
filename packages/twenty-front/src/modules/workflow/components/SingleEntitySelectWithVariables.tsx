import { IconChevronDown, IconForbid, LightIconButton } from 'twenty-ui';

import { RecordChip } from '@/object-record/components/RecordChip';
import { SingleEntitySelect } from '@/object-record/relation-picker/components/SingleEntitySelect';
import { useRelationPicker } from '@/object-record/relation-picker/hooks/useRelationPicker';
import { RelationPickerScope } from '@/object-record/relation-picker/scopes/RelationPickerScope';
import { EntityForSelect } from '@/object-record/relation-picker/types/EntityForSelect';
import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { DropdownScope } from '@/ui/layout/dropdown/scopes/DropdownScope';
import SearchVariablesDropdown from '@/workflow/search-variables/components/SearchVariablesDropdown';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { isString } from '@sniptt/guards';
import { useCallback, useState } from 'react';
import { isValidUuid } from '~/utils/isValidUuid';

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.font.color.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 32px;
  width: 100%;
`;

const StyledPlaceholder = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.md};
`;

export const StyledInputContainer = styled.div`
  background-color: ${({ theme }) => theme.background.transparent.lighter};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-top-left-radius: ${({ theme }) => theme.border.radius.sm};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.sm};
  border-right: none;
  border-bottom-right-radius: none;
  border-top-right-radius: none;
  box-sizing: border-box;
  display: flex;
  overflow: 'hidden';
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

export const StyledRecordPickerDropdownContainer = styled.div``;

export const StyledSearchVariablesDropdownContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    :hover {
      background-color: ${theme.background.transparent.light};
    }
  `}
  ${({ theme }) => css`
    background-color: ${theme.background.transparent.lighter};
    border-top-right-radius: ${theme.border.radius.sm};
    border-bottom-right-radius: ${theme.border.radius.sm};
    border: 1px solid ${theme.border.color.medium};
  `}
`;

type RecordId = string;
type Variable = string;

export type SingleEntitySelectWithVariablesProps = {
  label?: string;
  selectedRecord?: string | ObjectRecord;
  onPersist: (value: RecordId | Variable) => void;
  initialSearchFilter?: string | null;
  objectNameSingular: string;
};

const isValidRecordId = (value: string): boolean =>
  !!value && isValidUuid(value);

export const SingleEntitySelectWithVariables = ({
  label,
  selectedRecord,
  objectNameSingular,
  onPersist,
}: SingleEntitySelectWithVariablesProps) => {
  const [draftValue, setDraftValue] = useState<string | ObjectRecord>(
    selectedRecord ?? '',
  );

  const dropdownId = `workflow-record-picker-${objectNameSingular}`;
  const variablesDropdownId = `workflow-record-picker-${objectNameSingular}-variables`;

  const { closeDropdown } = useDropdown(dropdownId);

  const { setRelationPickerSearchFilter } = useRelationPicker({
    relationPickerScopeId: dropdownId,
  });

  const handleCloseRelationPickerDropdown = useCallback(() => {
    setRelationPickerSearchFilter('');
  }, [setRelationPickerSearchFilter]);

  const handleRecordSelected = (
    selectedEntity: EntityForSelect | null | undefined,
  ) => {
    setDraftValue(selectedEntity?.record ?? '');
    closeDropdown();
  };

  const handleVariableTagInsert = (variable: string) => {
    setDraftValue(variable);

    onPersist?.(variable);
  };

  const Chip = isString(draftValue) ? (
    draftValue // TODO - add a chip for variables
  ) : (
    <RecordChip record={draftValue} objectNameSingular={objectNameSingular} />
  );

  return (
    <StyledMainContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledRowContainer>
        <StyledInputContainer>
          {draftValue ? (
            Chip
          ) : (
            <StyledPlaceholder>Select a {objectNameSingular}</StyledPlaceholder>
          )}
          <StyledRecordPickerDropdownContainer>
            <DropdownScope dropdownScopeId={dropdownId}>
              <Dropdown
                dropdownId={dropdownId}
                dropdownPlacement="left-start"
                onClose={handleCloseRelationPickerDropdown}
                clickableComponent={
                  <LightIconButton
                    className="displayOnHover"
                    Icon={IconChevronDown}
                    accent="tertiary"
                  />
                }
                dropdownComponents={
                  <RelationPickerScope relationPickerScopeId={dropdownId}>
                    <SingleEntitySelect
                      EmptyIcon={IconForbid}
                      emptyLabel={'No ' + objectNameSingular}
                      onCancel={() => closeDropdown()}
                      onEntitySelected={handleRecordSelected}
                      relationObjectNameSingular={objectNameSingular}
                      relationPickerScopeId={dropdownId}
                      selectedRelationRecordIds={
                        !isString(draftValue) && isValidRecordId(draftValue?.id)
                          ? [draftValue.id]
                          : []
                      }
                    />
                  </RelationPickerScope>
                }
                dropdownHotkeyScope={{
                  scope: dropdownId,
                }}
              />
            </DropdownScope>
          </StyledRecordPickerDropdownContainer>
        </StyledInputContainer>
        <StyledSearchVariablesDropdownContainer>
          <SearchVariablesDropdown
            inputId={variablesDropdownId}
            onVariableSelect={handleVariableTagInsert}
            disabled={false}
          />
        </StyledSearchVariablesDropdownContainer>
      </StyledRowContainer>
    </StyledMainContainer>
  );
};
