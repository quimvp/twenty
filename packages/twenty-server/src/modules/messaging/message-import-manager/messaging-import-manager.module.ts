import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BillingModule } from 'src/engine/core-modules/billing/billing.module';
import { FeatureFlagModule } from 'src/engine/core-modules/feature-flag/feature-flag.module';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';
import { DataSourceEntity } from 'src/engine/metadata-modules/data-source/data-source.entity';
import { TwentyORMModule } from 'src/engine/twenty-orm/twenty-orm.module';
import { WorkspaceDataSourceModule } from 'src/engine/workspace-datasource/workspace-datasource.module';
import { EmailAliasManagerModule } from 'src/modules/connected-account/email-alias-manager/email-alias-manager.module';
import { RefreshAccessTokenManagerModule } from 'src/modules/connected-account/refresh-access-token-manager/refresh-access-token-manager.module';
import { MessagingCommonModule } from 'src/modules/messaging/common/messaging-common.module';
import { MessageChannelWorkspaceEntity } from 'src/modules/messaging/common/standard-objects/message-channel.workspace-entity';
import { MessagingSingleMessageImportCommand } from 'src/modules/messaging/message-import-manager/commands/messaging-single-message-import.command';
import { MessagingMessageListFetchCronCommand } from 'src/modules/messaging/message-import-manager/crons/commands/messaging-message-list-fetch.cron.command';
import { MessagingMessagesImportCronCommand } from 'src/modules/messaging/message-import-manager/crons/commands/messaging-messages-import.cron.command';
import { MessagingOngoingStaleCronCommand } from 'src/modules/messaging/message-import-manager/crons/commands/messaging-ongoing-stale.cron.command';
import { MessagingMessageListFetchCronJob } from 'src/modules/messaging/message-import-manager/crons/jobs/messaging-message-list-fetch.cron.job';
import { MessagingMessagesImportCronJob } from 'src/modules/messaging/message-import-manager/crons/jobs/messaging-messages-import.cron.job';
import { MessagingOngoingStaleCronJob } from 'src/modules/messaging/message-import-manager/crons/jobs/messaging-ongoing-stale.cron.job';
import { MessagingGmailDriverModule } from 'src/modules/messaging/message-import-manager/drivers/gmail/messaging-gmail-driver.module';
import { MessagingAddSingleMessageToCacheForImportJob } from 'src/modules/messaging/message-import-manager/jobs/messaging-add-single-message-to-cache-for-import.job';
import { MessagingCleanCacheJob } from 'src/modules/messaging/message-import-manager/jobs/messaging-clean-cache';
import { MessagingMessageListFetchJob } from 'src/modules/messaging/message-import-manager/jobs/messaging-message-list-fetch.job';
import { MessagingMessagesImportJob } from 'src/modules/messaging/message-import-manager/jobs/messaging-messages-import.job';
import { MessagingOngoingStaleJob } from 'src/modules/messaging/message-import-manager/jobs/messaging-ongoing-stale.job';
import { MessagingMessageImportManagerMessageChannelListener } from 'src/modules/messaging/message-import-manager/listeners/messaging-import-manager-message-channel.listener';
import { MessagingErrorHandlingService } from 'src/modules/messaging/message-import-manager/services/messaging-error-handling.service';
import { MessagingFullMessageListFetchService } from 'src/modules/messaging/message-import-manager/services/messaging-full-message-list-fetch.service';
import { MessagingMessageThreadService } from 'src/modules/messaging/message-import-manager/services/messaging-message-thread.service';
import { MessagingMessageService } from 'src/modules/messaging/message-import-manager/services/messaging-message.service';
import { MessagingMessagesImportService } from 'src/modules/messaging/message-import-manager/services/messaging-messages-import.service';
import { MessagingPartialMessageListFetchService } from 'src/modules/messaging/message-import-manager/services/messaging-partial-message-list-fetch.service';
import { MessagingSaveMessagesAndEnqueueContactCreationService } from 'src/modules/messaging/message-import-manager/services/messaging-save-messages-and-enqueue-contact-creation.service';
import { MessageParticipantManagerModule } from 'src/modules/messaging/message-participant-manager/message-participant-manager.module';
import { MessagingMonitoringModule } from 'src/modules/messaging/monitoring/messaging-monitoring.module';

@Module({
  imports: [
    RefreshAccessTokenManagerModule,
    WorkspaceDataSourceModule,
    MessagingGmailDriverModule,
    MessagingCommonModule,
    TypeOrmModule.forFeature([Workspace], 'core'),
    TypeOrmModule.forFeature([DataSourceEntity], 'metadata'),
    TwentyORMModule.forFeature([MessageChannelWorkspaceEntity]),
    BillingModule,
    EmailAliasManagerModule,
    FeatureFlagModule,
    MessageParticipantManagerModule,
    MessagingMonitoringModule,
  ],
  providers: [
    MessagingMessageListFetchCronCommand,
    MessagingMessagesImportCronCommand,
    MessagingOngoingStaleCronCommand,
    MessagingSingleMessageImportCommand,
    MessagingMessageListFetchJob,
    MessagingMessagesImportJob,
    MessagingOngoingStaleJob,
    MessagingMessageListFetchCronJob,
    MessagingMessagesImportCronJob,
    MessagingOngoingStaleCronJob,
    MessagingAddSingleMessageToCacheForImportJob,
    MessagingMessageImportManagerMessageChannelListener,
    MessagingCleanCacheJob,
    MessagingMessageService,
    MessagingMessageThreadService,
    MessagingErrorHandlingService,
    MessagingPartialMessageListFetchService,
    MessagingFullMessageListFetchService,
    MessagingMessagesImportService,
    MessagingSaveMessagesAndEnqueueContactCreationService,
  ],
  exports: [],
})
export class MessagingImportManagerModule {}
