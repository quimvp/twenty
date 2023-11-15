import { DataSource } from 'typeorm';

import { SeedObjectMetadataIds } from 'src/database/typeorm-seeds/metadata/object-metadata';
import { SeedWorkspaceId } from 'src/database/seeds/metadata';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

const fieldMetadataTableName = 'fieldMetadata';

export enum SeedApiKeyFieldMetadataIds {
  Id = '20202020-7222-45ee-b5c4-c30eba68566f',
  CreatedAt = '20202020-ecd6-479f-8368-5032fdee43b3',
  UpdatedAt = '20202020-435c-4133-93c0-df5709d1694d',

  Name = '20202020-1dfa-4ef3-8d19-51e82c28677a',
  ExpiresAt = '20202020-a092-41e2-940e-e17cd0403aa7',
  RevokedAt = '20202020-da41-436e-8498-b1a99c23b275',
}

export const seedApiKeyFieldMetadata = async (
  workspaceDataSource: DataSource,
  schemaName: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${fieldMetadataTableName}`, [
      'id',
      'objectMetadataId',
      'isCustom',
      'workspaceId',
      'isActive',
      'type',
      'name',
      'label',
      'targetColumnMap',
      'description',
      'icon',
      'isNullable',
    ])
    .orIgnore()
    .values([
      // Default fields
      {
        id: SeedApiKeyFieldMetadataIds.Id,
        objectMetadataId: SeedObjectMetadataIds.ApiKey,
        workspaceId: SeedWorkspaceId,
        isCustom: false,
        name: 'id',
        label: 'Id',
        type: FieldMetadataType.UUID,
        targetColumnMap: {
          value: 'id',
        },
        isNullable: false,
        // isSystem: true,
        isActive: true,
      },
      {
        id: SeedApiKeyFieldMetadataIds.CreatedAt,
        objectMetadataId: SeedObjectMetadataIds.ApiKey,
        workspaceId: SeedWorkspaceId,
        isCustom: false,
        name: 'createdAt',
        label: 'Creation date',
        type: FieldMetadataType.DATE,
        targetColumnMap: {
          value: 'createdAt',
        },
        icon: 'IconCalendar',
        isNullable: false,
        isActive: true,
      },
      {
        id: SeedApiKeyFieldMetadataIds.UpdatedAt,
        objectMetadataId: SeedObjectMetadataIds.ApiKey,
        workspaceId: SeedWorkspaceId,
        isCustom: false,
        name: 'updatedAt',
        label: 'Update date',
        type: FieldMetadataType.DATE,
        targetColumnMap: {
          value: 'updatedAt',
        },
        icon: 'IconCalendar',
        isNullable: false,
        isActive: true,
      },
      // Scalar fields
      {
        id: SeedApiKeyFieldMetadataIds.Name,
        objectMetadataId: SeedObjectMetadataIds.ApiKey,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'name',
        label: 'Name',
        targetColumnMap: {
          value: 'name',
        },
        description: 'ApiKey name',
        icon: 'IconLink',
        isNullable: false,
      },
      {
        id: SeedApiKeyFieldMetadataIds.ExpiresAt,
        objectMetadataId: SeedObjectMetadataIds.ApiKey,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'DATE',
        name: 'expiresAt',
        label: 'Expiration date',
        targetColumnMap: {
          value: 'expiresAt',
        },
        description: 'ApiKey expiration date',
        icon: 'IconCalendar',
        isNullable: false,
      },
      {
        id: SeedApiKeyFieldMetadataIds.RevokedAt,
        objectMetadataId: SeedObjectMetadataIds.ApiKey,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'DATE',
        name: 'revokedAt',
        label: 'Revocation date',
        targetColumnMap: {
          value: 'revokedAt',
        },
        description: 'ApiKey revocation date',
        icon: 'IconCalendar',
        isNullable: true,
      },
    ])
    .execute();
};
