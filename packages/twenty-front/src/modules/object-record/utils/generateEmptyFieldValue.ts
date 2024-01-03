import { FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import { FieldMetadataType } from '~/generated/graphql';

export const generateEmptyFieldValue = (
  fieldMetadataItem: FieldMetadataItem,
) => {
  switch (fieldMetadataItem.type) {
    case FieldMetadataType.Email:
    case FieldMetadataType.Phone:
    case FieldMetadataType.Text: {
      return '';
    }
    case FieldMetadataType.Link: {
      return {
        label: '',
        url: '',
        __typename: 'Link',
      };
    }
    case FieldMetadataType.FullName: {
      return {
        firstName: '',
        lastName: '',
        __typename: 'FullName',
      };
    }
    case FieldMetadataType.DateTime: {
      return null;
    }
    case FieldMetadataType.Number:
    case FieldMetadataType.Rating:
    case FieldMetadataType.Numeric: {
      return null;
    }
    case FieldMetadataType.Uuid: {
      return '';
    }
    case FieldMetadataType.Boolean: {
      return true;
    }
    case FieldMetadataType.Relation: {
      return null;
    }
    case FieldMetadataType.Currency: {
      return {
        amountMicros: null,
        currencyCode: null,
        __typename: 'Currency',
      };
    }
    // Handling MultiSelect and Select in the default case
    default: {
      if (
        fieldMetadataItem.type === FieldMetadataType.MultiSelect ||
        fieldMetadataItem.type === FieldMetadataType.Select
      ) {
        const defaultSelectValue = {
          color: 'DEFAULT_COLOR', // Replace with the actual default color
          label: '',
          __typename: 'FieldSelectValue',
        };
        return fieldMetadataItem.type === FieldMetadataType.Select
          ? defaultSelectValue
          : null;
      }
      throw new Error('Not implemented yet');
    }
  }
};
