import { RawJsonFilter } from '../../graphql/types/RecordGqlOperationFilter';

export const isMatchingRawJsonFilter = ({
  rawJsonFilter,
  value,
}: {
  rawJsonFilter: RawJsonFilter;
  value: string;
}) => {
  switch (true) {
    case rawJsonFilter.contains_filter !== undefined: {
      const regexPattern = rawJsonFilter.contains_filter.replace(/%/g, '.*');
      const regexCaseInsensitive = new RegExp(`^${regexPattern}$`, 'i');

      const stringValue = JSON.stringify(value);

      return regexCaseInsensitive.test(stringValue);
    }
    case rawJsonFilter.is !== undefined: {
      if (rawJsonFilter.is === 'NULL') {
        return value === null;
      } else {
        return value !== null;
      }
    }
    default: {
      throw new Error(
        `Unexpected value for string filter : ${JSON.stringify(rawJsonFilter)}`,
      );
    }
  }
};
