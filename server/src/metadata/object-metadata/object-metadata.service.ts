import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';

import { WorkspaceMigrationService } from 'src/metadata/workspace-migration/workspace-migration.service';
import { WorkspaceMigrationRunnerService } from 'src/workspace/workspace-migration-runner/workspace-migration-runner.service';
import {
  WorkspaceMigrationColumnActionType,
  WorkspaceMigrationColumnCreate,
  WorkspaceMigrationTableAction,
} from 'src/metadata/workspace-migration/workspace-migration.entity';
import {
  FieldMetadataEntity,
  FieldMetadataType,
} from 'src/metadata/field-metadata/field-metadata.entity';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import {
  RelationMetadataEntity,
  RelationMetadataType,
} from 'src/metadata/relation-metadata/relation-metadata.entity';

import { ObjectMetadataEntity } from './object-metadata.entity';

import { CreateObjectInput } from './dtos/create-object.input';

@Injectable()
export class ObjectMetadataService extends TypeOrmQueryService<ObjectMetadataEntity> {
  constructor(
    @InjectRepository(ObjectMetadataEntity, 'metadata')
    private readonly objectMetadataRepository: Repository<ObjectMetadataEntity>,

    @InjectRepository(FieldMetadataEntity, 'metadata')
    private readonly fieldMetadataRepository: Repository<FieldMetadataEntity>,

    @InjectRepository(RelationMetadataEntity, 'metadata')
    private readonly relationMetadataRepository: Repository<RelationMetadataEntity>,

    private readonly dataSourceService: DataSourceService,
    private readonly typeORMService: TypeORMService,
    private readonly workspaceMigrationService: WorkspaceMigrationService,
    private readonly workspaceMigrationRunnerService: WorkspaceMigrationRunnerService,
  ) {
    super(objectMetadataRepository);
  }

  override async createOne(
    record: CreateObjectInput,
  ): Promise<ObjectMetadataEntity> {
    const lastDataSourceMetadata =
      await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(
        record.workspaceId,
      );

    if (record.nameSingular.toLowerCase() === record.namePlural.toLowerCase()) {
      throw new Error(
        'The singular and plural name cannot be the same for an object',
      );
    }

    const createdObjectMetadata = await super.createOne({
      ...record,
      dataSourceId: lastDataSourceMetadata.id,
      targetTableName: `_${record.nameSingular}`,
      isActive: true,
      isCustom: true,
      isSystem: false,
      fields:
        // Creating default fields.
        // No need to create a custom migration for this though as the default columns are already
        // created with default values which is not supported yet by workspace migrations.
        [
          {
            type: FieldMetadataType.UUID,
            name: 'id',
            label: 'Id',
            targetColumnMap: {
              value: 'id',
            },
            icon: 'Icon123',
            description: 'Id',
            isNullable: true,
            isActive: true,
            isCustom: false,
            isSystem: true,
            workspaceId: record.workspaceId,
            defaultValue: { type: 'uuid' },
          },
          {
            type: FieldMetadataType.TEXT,
            name: 'name',
            label: 'Name',
            targetColumnMap: {
              value: 'name',
            },
            icon: 'IconAbc',
            description: 'Name',
            isNullable: true,
            isActive: true,
            isCustom: false,
            workspaceId: record.workspaceId,
            defaultValue: { value: 'Untitled' },
          },
          {
            type: FieldMetadataType.DATE_TIME,
            name: 'createdAt',
            label: 'Creation date',
            targetColumnMap: {
              value: 'createdAt',
            },
            icon: 'IconCalendar',
            description: 'Creation date',
            isNullable: true,
            isActive: true,
            isCustom: false,
            workspaceId: record.workspaceId,
            defaultValue: { type: 'now' },
          },
          {
            type: FieldMetadataType.DATE_TIME,
            name: 'updatedAt',
            label: 'Update date',
            targetColumnMap: {
              value: 'updatedAt',
            },
            icon: 'IconCalendar',
            description: 'Update date',
            isNullable: true,
            isActive: true,
            isCustom: false,
            workspaceId: record.workspaceId,
            defaultValue: { type: 'now' },
          },
        ],
    });

    const activityTargetObjectMetadata =
      await this.objectMetadataRepository.findOneByOrFail({
        nameSingular: 'activityTarget',
        workspaceId: record.workspaceId,
      });

    const activityTargetRelationFieldMetadata =
      await this.fieldMetadataRepository.save([
        // FROM
        {
          objectMetadataId: createdObjectMetadata.id,
          workspaceId: record.workspaceId,
          isCustom: true,
          isActive: true,
          type: FieldMetadataType.RELATION,
          name: 'activityTargets',
          label: 'Activities',
          targetColumnMap: {},
          description: `Activities tied to the ${record.labelSingular}`,
          icon: 'IconCheckbox',
          isNullable: true,
        },
        // TO
        {
          objectMetadataId: activityTargetObjectMetadata.id,
          workspaceId: record.workspaceId,
          isCustom: true,
          isActive: true,
          type: FieldMetadataType.RELATION,
          name: record.nameSingular,
          label: record.labelSingular,
          targetColumnMap: {},
          description: `ActivityTarget ${record.labelSingular}`,
          icon: 'IconBuildingSkyscraper',
          isNullable: true,
        },
        // Foreign key
        {
          objectMetadataId: activityTargetObjectMetadata.id,
          workspaceId: record.workspaceId,
          isCustom: true,
          isActive: true,
          type: FieldMetadataType.UUID,
          name: `${createdObjectMetadata.targetTableName}Id`,
          label: `${record.labelSingular} ID (foreign key)`,
          targetColumnMap: {},
          description: `ActivityTarget ${record.labelSingular} id foreign key`,
          icon: undefined,
          isNullable: true,
          isSystem: true,
          defaultValue: undefined,
        },
      ]);

    const activityTargetRelationFieldMetadataMap =
      activityTargetRelationFieldMetadata.reduce(
        (acc, fieldMetadata: FieldMetadataEntity) => {
          if (fieldMetadata.type === FieldMetadataType.RELATION) {
            acc[fieldMetadata.objectMetadataId] = fieldMetadata;
          }
          return acc;
        },
        {},
      );

    await this.relationMetadataRepository.save([
      {
        workspaceId: record.workspaceId,
        relationType: RelationMetadataType.ONE_TO_MANY,
        fromObjectMetadataId: createdObjectMetadata.id,
        toObjectMetadataId: activityTargetObjectMetadata.id,
        fromFieldMetadataId:
          activityTargetRelationFieldMetadataMap[createdObjectMetadata.id].id,
        toFieldMetadataId:
          activityTargetRelationFieldMetadataMap[
            activityTargetObjectMetadata.id
          ].id,
      },
    ]);

    await this.workspaceMigrationService.createCustomMigration(
      createdObjectMetadata.workspaceId,
      [
        {
          name: createdObjectMetadata.targetTableName,
          action: 'create',
        } satisfies WorkspaceMigrationTableAction,
        // Add activity target relation
        {
          name: activityTargetObjectMetadata.targetTableName,
          action: 'alter',
          columns: [
            {
              action: WorkspaceMigrationColumnActionType.CREATE,
              columnName: `${createdObjectMetadata.targetTableName}Id`,
              columnType: 'uuid',
            } satisfies WorkspaceMigrationColumnCreate,
          ],
        },
        {
          name: activityTargetObjectMetadata.targetTableName,
          action: 'alter',
          columns: [
            {
              action: WorkspaceMigrationColumnActionType.RELATION,
              columnName: `${createdObjectMetadata.targetTableName}Id`,
              referencedTableName: createdObjectMetadata.targetTableName,
              referencedTableColumnName: 'id',
            },
          ],
        },
        // This is temporary until we implement mainIdentifier
        {
          name: createdObjectMetadata.targetTableName,
          action: 'alter',
          columns: [
            {
              action: WorkspaceMigrationColumnActionType.CREATE,
              columnName: 'name',
              columnType: 'varchar',
              defaultValue: "'Untitled'",
            } satisfies WorkspaceMigrationColumnCreate,
          ],
        } satisfies WorkspaceMigrationTableAction,
      ],
    );

    await this.workspaceMigrationRunnerService.executeMigrationFromPendingMigrations(
      createdObjectMetadata.workspaceId,
    );

    const dataSourceMetadata =
      await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(
        createdObjectMetadata.workspaceId,
      );

    const workspaceDataSource = await this.typeORMService.connectToDataSource(
      dataSourceMetadata,
    );

    const view = await workspaceDataSource?.query(
      `INSERT INTO ${dataSourceMetadata.schema}."view"
      ("objectMetadataId", "type", "name")
      VALUES ('${createdObjectMetadata.id}', 'table', 'All ${createdObjectMetadata.namePlural}') RETURNING *`,
    );
    createdObjectMetadata.fields.map(async (field, index) => {
      if (field.name === 'id') {
        return;
      }

      await workspaceDataSource?.query(
        `INSERT INTO ${dataSourceMetadata.schema}."viewField"
      ("fieldMetadataId", "position", "isVisible", "size", "viewId")
      VALUES ('${field.id}', '${index - 1}', true, 180, '${
          view[0].id
        }') RETURNING *`,
      );
    });

    return createdObjectMetadata;
  }

  public async findOne(
    options: FindOneOptions<ObjectMetadataEntity>,
  ): Promise<ObjectMetadataEntity | null> {
    return this.objectMetadataRepository.findOne({
      ...options,
      relations: [
        'fields',
        'fields.fromRelationMetadata',
        'fields.toRelationMetadata',
      ],
    });
  }

  public async findMany(
    where:
      | FindOptionsWhere<ObjectMetadataEntity>[]
      | FindOptionsWhere<ObjectMetadataEntity>,
  ) {
    return this.objectMetadataRepository.find({
      where,
      relations: [
        'fields',
        'fields.fromRelationMetadata',
        'fields.toRelationMetadata',
      ],
    });
  }

  public async findOneWithinWorkspace(
    objectMetadataId: string,
    workspaceId: string,
  ) {
    return this.objectMetadataRepository.findOne({
      where: { id: objectMetadataId, workspaceId },
    });
  }

  public async deleteObjectsMetadata(workspaceId: string) {
    await this.objectMetadataRepository.delete({ workspaceId });
  }
}
