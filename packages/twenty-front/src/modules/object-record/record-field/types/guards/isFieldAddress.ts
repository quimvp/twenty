import { FieldDefinition } from '../FieldDefinition';
import { FieldLinkMetadata, FieldMetadata } from '../FieldMetadata';

export const isFieldAddress = (
  field: Pick<FieldDefinition<FieldMetadata>, 'type'>,
): field is FieldDefinition<FieldLinkMetadata> => field.type === 'ADDRESS';
