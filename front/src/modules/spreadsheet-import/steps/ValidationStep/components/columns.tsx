import { Column, useRowSelection } from 'react-data-grid';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

import { MatchColumnSelect } from '@/spreadsheet-import/components/Selects/MatchColumnSelect';
import {
  Checkbox,
  CheckboxVariant,
} from '@/ui/input/checkbox/components/Checkbox';
import { TextInput } from '@/ui/input/text/components/TextInput';
import { Toggle } from '@/ui/input/toggle/components/Toggle';
import { AppTooltip } from '@/ui/tooltip/AppTooltip';

import type { Data, Fields } from '../../../types';
import type { Meta } from '../types';

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  position: relative;
`;

const HeaderLabel = styled.span`
  display: flex;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CheckboxContainer = styled.div`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  line-height: 0;
  width: 100%;
`;

const ToggleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  min-height: 100%;
  min-width: 100%;
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

const DefaultContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SELECT_COLUMN_KEY = 'select-row';

export const generateColumns = <T extends string>(
  fields: Fields<T>,
): Column<Data<T> & Meta>[] => [
  {
    key: SELECT_COLUMN_KEY,
    name: '',
    width: 35,
    minWidth: 35,
    maxWidth: 35,
    resizable: false,
    sortable: false,
    frozen: true,
    formatter: (props) => {
      // eslint-disable-next-line  react-hooks/rules-of-hooks
      const [isRowSelected, onRowSelectionChange] = useRowSelection();

      return (
        <CheckboxContainer>
          <Checkbox
            aria-label="Select"
            checked={isRowSelected}
            variant={CheckboxVariant.Tertiary}
            onChange={(event) => {
              onRowSelectionChange({
                row: props.row,
                checked: event.target.checked,
                isShiftClick: (event.nativeEvent as MouseEvent).shiftKey,
              });
            }}
          />
        </CheckboxContainer>
      );
    },
  },
  ...fields.map(
    (column): Column<Data<T> & Meta> => ({
      key: column.key,
      name: column.label,
      minWidth: 150,
      resizable: true,
      headerRenderer: () => (
        <HeaderContainer>
          <HeaderLabel id={`${column.key}`}>{column.label}</HeaderLabel>
          {column.description &&
            createPortal(
              <AppTooltip
                anchorSelect={`#${column.key}`}
                place="top"
                content={column.description}
              />,
              document.body,
            )}
        </HeaderContainer>
      ),
      editable: column.fieldType.type !== 'checkbox',
      editor: ({ row, onRowChange, onClose }) => {
        let component;

        switch (column.fieldType.type) {
          case 'select': {
            const value = column.fieldType.options.find(
              (option) =>
                option.value ===
                (row[column.key as keyof (Data<T> & Meta)] as string),
            );

            component = (
              <MatchColumnSelect
                value={
                  value
                    ? ({
                        icon: null,
                        ...value,
                      } as const)
                    : value
                }
                onChange={(value) => {
                  onRowChange({ ...row, [column.key]: value?.value }, true);
                }}
                options={column.fieldType.options}
              />
            );
            break;
          }
          default:
            component = (
              <TextInput
                value={row[column.key] as string}
                onChange={(value: string) => {
                  onRowChange({ ...row, [column.key]: value });
                }}
                autoFocus={true}
                onBlur={() => onClose(true)}
              />
            );
        }

        return <InputContainer>{component}</InputContainer>;
      },
      editorOptions: {
        editOnClick: true,
      },
      formatter: ({ row, onRowChange }) => {
        let component;

        switch (column.fieldType.type) {
          case 'checkbox':
            component = (
              <ToggleContainer
                id={`${column.key}-${row.__index}`}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Toggle
                  value={row[column.key] as boolean}
                  onChange={() => {
                    onRowChange({
                      ...row,
                      [column.key]: !row[column.key as T],
                    });
                  }}
                />
              </ToggleContainer>
            );
            break;
          case 'select':
            component = (
              <DefaultContainer id={`${column.key}-${row.__index}`}>
                {column.fieldType.options.find(
                  (option) => option.value === row[column.key as T],
                )?.label || null}
              </DefaultContainer>
            );
            break;
          default:
            component = (
              <DefaultContainer id={`${column.key}-${row.__index}`}>
                {row[column.key as T]}
              </DefaultContainer>
            );
        }

        if (row.__errors?.[column.key]) {
          return (
            <>
              {component}
              {createPortal(
                <AppTooltip
                  anchorSelect={`#${column.key}-${row.__index}`}
                  place="top"
                  content={row.__errors?.[column.key]?.message}
                />,
                document.body,
              )}
            </>
          );
        }

        return component;
      },
      cellClass: (row: Meta) => {
        switch (row.__errors?.[column.key]?.level) {
          case 'error':
            return 'rdg-cell-error';
          case 'warning':
            return 'rdg-cell-warning';
          case 'info':
            return 'rdg-cell-info';
          default:
            return '';
        }
      },
    }),
  ),
];
