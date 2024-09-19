import { ViewFilterOperand } from '@/views/types/ViewFilterOperand';

import { FilterableFieldType } from '@/object-record/object-filter-dropdown/types/FilterableFieldType';
import { getOperandsForFilterType } from '../getOperandsForFilterType';

describe('getOperandsForFilterType', () => {
  const emptyOperands = [
    ViewFilterOperand.IsEmpty,
    ViewFilterOperand.IsNotEmpty,
  ];

  const containsOperands = [
    ViewFilterOperand.Contains,
    ViewFilterOperand.DoesNotContain,
  ];

  const numberOperands = [
    ViewFilterOperand.GreaterThan,
    ViewFilterOperand.LessThan,
  ];

  const relationOperand = [ViewFilterOperand.Is, ViewFilterOperand.IsNot];

  const testCases = [
    ['TEXT', [...containsOperands, ...emptyOperands]],
    ['EMAIL', [...containsOperands, ...emptyOperands]],
    ['FULL_NAME', [...containsOperands, ...emptyOperands]],
    ['ADDRESS', [...containsOperands, ...emptyOperands]],
    ['LINK', [...containsOperands, ...emptyOperands]],
    ['LINKS', [...containsOperands, ...emptyOperands]],
    ['ACTOR', [...containsOperands, ...emptyOperands]],
    ['CURRENCY', [...numberOperands, ...emptyOperands]],
    ['NUMBER', [...numberOperands, ...emptyOperands]],
    ['DATE_TIME', [...numberOperands, ...emptyOperands]],
    ['RELATION', [...relationOperand, ...emptyOperands]],
    [undefined, []],
    [null, []],
    ['UNKNOWN_TYPE', []],
  ];

  testCases.forEach(([filterType, expectedOperands]) => {
    it(`should return correct operands for FilterType.${filterType}`, () => {
      const result = getOperandsForFilterType(
        filterType as FilterableFieldType,
      );
      expect(result).toEqual(expectedOperands);
    });
  });
});
