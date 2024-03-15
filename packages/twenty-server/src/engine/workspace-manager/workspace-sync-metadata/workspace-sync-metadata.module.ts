import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeatureFlagEntity } from 'src/engine/modules/feature-flag/feature-flag.entity';
import { FieldMetadataEntity } from 'src/engine-metadata/field-metadata/field-metadata.entity';
import { ObjectMetadataEntity } from 'src/engine-metadata/object-metadata/object-metadata.entity';
import { RelationMetadataEntity } from 'src/engine-metadata/relation-metadata/relation-metadata.entity';
import { WorkspaceMigrationEntity } from 'src/engine-metadata/workspace-migration/workspace-migration.entity';
import { WorkspaceMigrationRunnerModule } from 'src/engine/workspace-manager/workspace-migration-runner/workspace-migration-runner.module';
import { WorkspaceSyncMetadataService } from 'src/engine/workspace-manager/workspace-sync-metadata/workspace-sync-metadata.service';
import { workspaceSyncMetadataFactories } from 'src/engine/workspace-manager/workspace-sync-metadata/factories';
import { workspaceSyncMetadataComparators } from 'src/engine/workspace-manager/workspace-sync-metadata/comparators';
import { WorkspaceMetadataUpdaterService } from 'src/engine/workspace-manager/workspace-sync-metadata/services/workspace-metadata-updater.service';
import { WorkspaceSyncObjectMetadataService } from 'src/engine/workspace-manager/workspace-sync-metadata/services/workspace-sync-object-metadata.service';
import { WorkspaceSyncRelationMetadataService } from 'src/engine/workspace-manager/workspace-sync-metadata/services/workspace-sync-relation-metadata.service';
import { WorkspaceSyncFieldMetadataService } from 'src/engine/workspace-manager/workspace-sync-metadata/services/workspace-sync-field-metadata.service';
import { WorkspaceMigrationBuilderModule } from 'src/engine/workspace-manager/workspace-migration-builder/workspace-migration-builder.module';

@Module({
  imports: [
    WorkspaceMigrationBuilderModule,
    WorkspaceMigrationRunnerModule,
    TypeOrmModule.forFeature(
      [
        FieldMetadataEntity,
        ObjectMetadataEntity,
        RelationMetadataEntity,
        WorkspaceMigrationEntity,
      ],
      'metadata',
    ),
    TypeOrmModule.forFeature([FeatureFlagEntity], 'core'),
  ],
  providers: [
    ...workspaceSyncMetadataFactories,
    ...workspaceSyncMetadataComparators,
    WorkspaceMetadataUpdaterService,
    WorkspaceSyncObjectMetadataService,
    WorkspaceSyncRelationMetadataService,
    WorkspaceSyncFieldMetadataService,
    WorkspaceSyncMetadataService,
  ],
  exports: [...workspaceSyncMetadataFactories, WorkspaceSyncMetadataService],
})
export class WorkspaceSyncMetadataModule {}
