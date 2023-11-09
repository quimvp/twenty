import { FieldDefinition } from '../FieldDefinition';
import { FieldDoubleTextChipMetadata, FieldMetadata } from '../FieldMetadata';

export const isFieldDoubleTextChip = (
  field: FieldDefinition<FieldMetadata>,
): field is FieldDefinition<FieldDoubleTextChipMetadata> =>
  field.type === 'DOUBLE_TEXT_CHIP';
