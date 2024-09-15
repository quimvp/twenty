import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import { IconChevronLeft, IconChevronRight } from 'twenty-ui';

import { LightIconButton } from '@/ui/input/button/components/LightIconButton';
import { Select } from '@/ui/input/components/Select';
import { DateTimeInput } from '@/ui/input/components/internal/date/components/DateTimeInput';

import {
  MONTH_AND_YEAR_DROPDOWN_MONTH_SELECT_ID,
  MONTH_AND_YEAR_DROPDOWN_YEAR_SELECT_ID,
} from './InternalDatePicker';

const StyledCustomDatePickerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(2)};

  gap: ${({ theme }) => theme.spacing(1)};
`;

const months = [
  { label: 'January', value: 0 },
  { label: 'February', value: 1 },
  { label: 'March', value: 2 },
  { label: 'April', value: 3 },
  { label: 'May', value: 4 },
  { label: 'June', value: 5 },
  { label: 'July', value: 6 },
  { label: 'August', value: 7 },
  { label: 'September', value: 8 },
  { label: 'October', value: 9 },
  { label: 'November', value: 10 },
  { label: 'December', value: 11 },
];

const years = Array.from(
  { length: 200 },
  (_, i) => new Date().getFullYear() + 5 - i,
).map((year) => ({ label: year.toString(), value: year }));

type DatePickerHeaderProps = {
  date: Date;
  onChange?: (date: Date | null) => void;
  onChangeMonth: (month: number) => void;
  onChangeYear: (year: number) => void;
  onAddMonth: () => void;
  onSubtractMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  isDateTimeInput?: boolean;
  timeZone: string;
};

export const DatePickerHeader = ({
  date,
  onChange,
  onChangeMonth,
  onChangeYear,
  onAddMonth,
  onSubtractMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  isDateTimeInput,
  timeZone,
}: DatePickerHeaderProps) => {
  const endOfDayDateTimeInLocalTimezone = DateTime.now().set({
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
  });

  const endOfDayInLocalTimezone = endOfDayDateTimeInLocalTimezone.toJSDate();

  return (
    <>
      <DateTimeInput
        date={date}
        isDateTimeInput={isDateTimeInput}
        onChange={onChange}
        userTimezone={timeZone}
      />
      <StyledCustomDatePickerHeader>
        <Select
          dropdownId={MONTH_AND_YEAR_DROPDOWN_MONTH_SELECT_ID}
          options={months}
          disableBlur
          onChange={onChangeMonth}
          value={endOfDayInLocalTimezone.getMonth()}
          fullWidth
        />
        <Select
          dropdownId={MONTH_AND_YEAR_DROPDOWN_YEAR_SELECT_ID}
          onChange={onChangeYear}
          value={endOfDayInLocalTimezone.getFullYear()}
          options={years}
          disableBlur
          fullWidth
        />
        <LightIconButton
          Icon={IconChevronLeft}
          onClick={onSubtractMonth}
          size="medium"
          disabled={prevMonthButtonDisabled}
        />
        <LightIconButton
          Icon={IconChevronRight}
          onClick={onAddMonth}
          size="medium"
          disabled={nextMonthButtonDisabled}
        />
      </StyledCustomDatePickerHeader>
    </>
  );
};
