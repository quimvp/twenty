import type { Columns } from '@/spreadsheet-import/components/steps/MatchColumnsStep/MatchColumnsStep';
import type { Fields } from '@/spreadsheet-import/types';

export const findUnmatchedRequiredFields = <T extends string>(
  fields: Fields<T>,
  columns: Columns<T>,
) =>
  fields
    .filter((field) =>
      field.validations?.some((validation) => validation.rule === 'required'),
    )
    .filter(
      (field) =>
        columns.findIndex(
          (column) => 'value' in column && column.value === field.key,
        ) === -1,
    )
    .map((field) => field.label) || [];
