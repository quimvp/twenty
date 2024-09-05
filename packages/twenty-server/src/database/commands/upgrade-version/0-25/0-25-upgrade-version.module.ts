import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MigrateEmailFieldsToEmailsCommand } from 'src/database/commands/upgrade-version/0-25/0-25-migrate-email-fields-to-emails.command';
import { UpgradeTo0_25Command } from 'src/database/commands/upgrade-version/0-25/0-25-upgrade-version.command';
import { TypeORMModule } from 'src/database/typeorm/typeorm.module';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';
import { DataSourceModule } from 'src/engine/metadata-modules/data-source/data-source.module';
import { FieldMetadataEntity } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';
import { FieldMetadataModule } from 'src/engine/metadata-modules/field-metadata/field-metadata.module';
import { ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { WorkspaceMetadataVersionModule } from 'src/engine/metadata-modules/workspace-metadata-version/workspace-metadata-version.module';
import { WorkspaceSyncMetadataCommandsModule } from 'src/engine/workspace-manager/workspace-sync-metadata/commands/workspace-sync-metadata-commands.module';
import { ViewModule } from 'src/modules/view/view.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workspace], 'core'),
    WorkspaceSyncMetadataCommandsModule,
    DataSourceModule,
    WorkspaceMetadataVersionModule,
    FieldMetadataModule,
    TypeOrmModule.forFeature(
      [FieldMetadataEntity, ObjectMetadataEntity],
      'metadata',
    ),
    TypeORMModule,
    ViewModule,
  ],
  providers: [UpgradeTo0_25Command, MigrateEmailFieldsToEmailsCommand],
})
export class UpgradeTo0_25CommandModule {}
