import { RelationMetadataInterface } from './relation-metadata.interface';
import { FieldMetadataInterface } from './field-metadata.interface';

export interface ObjectMetadataInterface {
  id: string;
  standardId?: string | null;
  nameSingular: string;
  namePlural: string;
  labelSingular: string;
  labelPlural: string;
  description?: string;
  targetTableName: string;
  fromRelations: RelationMetadataInterface[];
  toRelations: RelationMetadataInterface[];
  fields: FieldMetadataInterface[];
  isSystem: boolean;
  isCustom: boolean;
  isActive: boolean;
  isRemote: boolean;
  isAuditLogged: boolean;
}
