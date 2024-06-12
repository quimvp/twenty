import { isFieldRelationMetadata } from '@/object-record/record-field/types/guards/isFieldRelationMetadata';
import { FieldMetadataType } from '~/generated-metadata/graphql';

import { FieldDefinition } from '../FieldDefinition';
import { FieldMetadata } from '../FieldMetadata';

export const isFieldRelationFromManyObjects = (
  field: Pick<FieldDefinition<FieldMetadata>, 'type' | 'metadata'>,
) =>
  field.type === FieldMetadataType.Relation &&
  isFieldRelationMetadata(field.metadata) &&
  field.metadata.relationType === 'FROM_MANY_OBJECTS';
