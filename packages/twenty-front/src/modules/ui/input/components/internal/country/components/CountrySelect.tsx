import { useMemo } from 'react';

import { IconComponentProps } from '@/ui/display/icon/types/IconComponent';
import { SELECT_COUNTRY_DROPDOWN_ID } from '@/ui/input/components/internal/country/constants/SelectCountryDropdownId';
import { useCountries } from '@/ui/input/components/internal/hooks/useCountries';
import { Select, SelectOption } from '@/ui/input/components/Select';

export const CountrySelect = ({
  selectedCountryName,
  onChange,
}: {
  selectedCountryName: string;
  onChange: (countryCode: string) => void;
}) => {
  const countries = useCountries();

  const options: SelectOption<string>[] = useMemo(() => {
    return countries.map<SelectOption<string>>(({ countryName, Flag }) => ({
      label: countryName,
      value: countryName,
      Icon: (props: IconComponentProps) =>
        Flag({ width: props.size, height: props.size }), // TODO : improve this ?
    }));
  }, [countries]);

  return (
    <Select
      fullWidth
      dropdownId={SELECT_COUNTRY_DROPDOWN_ID}
      options={options}
      label="COUNTRY"
      withSearchInput
      onChange={onChange}
      value={selectedCountryName}
    />
  );
};
