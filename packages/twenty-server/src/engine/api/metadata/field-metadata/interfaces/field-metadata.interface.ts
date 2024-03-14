import { FieldMetadataTargetColumnMap } from 'src/engine/api/metadata/field-metadata/interfaces/field-metadata-target-column-map.interface';
import { FieldMetadataDefaultValue } from 'src/engine/api/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { FieldMetadataOptions } from 'src/engine/api/metadata/field-metadata/interfaces/field-metadata-options.interface';

import { FieldMetadataType } from 'src/engine/api/metadata/field-metadata/field-metadata.entity';
import { RelationMetadataEntity } from 'src/engine/api/metadata/relation-metadata/relation-metadata.entity';

export interface FieldMetadataInterface<
  T extends FieldMetadataType | 'default' = 'default',
> {
  id: string;
  type: FieldMetadataType;
  name: string;
  label: string;
  targetColumnMap: FieldMetadataTargetColumnMap<T>;
  defaultValue?: FieldMetadataDefaultValue<T>;
  options?: FieldMetadataOptions<T>;
  objectMetadataId: string;
  workspaceId?: string;
  description?: string;
  isNullable?: boolean;
  fromRelationMetadata?: RelationMetadataEntity;
  toRelationMetadata?: RelationMetadataEntity;
  isCustom?: boolean;
}
