import { Module } from '@nestjs/common';

import { ConnectedAccountModule } from 'src/workspace/messaging/connected-account/connected-account.module';
import { MessageChannelMessageAssociationModule } from 'src/workspace/messaging/message-channel-message-association/message-channel-message-assocation.module';
import { MessageChannelModule } from 'src/workspace/messaging/message-channel/message-channel.module';
import { MessageThreadModule } from 'src/workspace/messaging/message-thread/message-thread.module';
import { EnvironmentModule } from 'src/integrations/environment/environment.module';
import { MessagingPersonListener } from 'src/workspace/messaging/listeners/messaging-person.listener';
import { MessageModule } from 'src/workspace/messaging/message/message.module';
import { GmailClientProvider } from 'src/workspace/messaging/providers/gmail/gmail-client.provider';
import { CreateContactService } from 'src/workspace/messaging/create-contact/create-contact.service';
import { CreateCompanyService } from 'src/workspace/messaging/create-company/create-company.service';
import { FetchMessagesByBatchesService } from 'src/workspace/messaging/services/fetch-messages-by-batches.service';
import { GmailFullSyncService } from 'src/workspace/messaging/services/gmail-full-sync.service';
import { GmailPartialSyncService } from 'src/workspace/messaging/services/gmail-partial-sync.service';
import { GmailRefreshAccessTokenService } from 'src/workspace/messaging/services/gmail-refresh-access-token.service';
import { IsPersonEmailService } from 'src/workspace/messaging/services/is-person-email.service';
import { WorkspaceDataSourceModule } from 'src/workspace/workspace-datasource/workspace-datasource.module';
import { MessageParticipantModule } from 'src/workspace/messaging/message-participant/message-participant.module';
import { MessagingWorkspaceMemberListener } from 'src/workspace/messaging/listeners/messaging-workspace-member.listener';
import { IsContactAutoCreationEnabledListener } from 'src/workspace/messaging/listeners/is-contact-auto-creation-enabled-listener';
import { MessageService } from 'src/workspace/messaging/message/message.service';
import { CreateQueriesFromMessageIdsService } from 'src/workspace/messaging/services/utils/create-queries-from-message-ids.service';
import { GetDomainNameFromHandleService } from 'src/workspace/messaging/services/utils/get-domain-name-from-handle.service';

@Module({
  imports: [
    EnvironmentModule,
    WorkspaceDataSourceModule,
    ConnectedAccountModule,
    MessageChannelModule,
    MessageChannelMessageAssociationModule,
    MessageModule,
    MessageThreadModule,
    MessageParticipantModule,
  ],
  providers: [
    GmailFullSyncService,
    GmailPartialSyncService,
    FetchMessagesByBatchesService,
    GmailRefreshAccessTokenService,
    GmailClientProvider,
    CreateContactService,
    IsPersonEmailService,
    CreateCompanyService,
    MessagingPersonListener,
    MessagingWorkspaceMemberListener,
    IsContactAutoCreationEnabledListener,
    MessageService,
    CreateQueriesFromMessageIdsService,
    GetDomainNameFromHandleService,
  ],
  exports: [
    GmailPartialSyncService,
    GmailFullSyncService,
    GmailRefreshAccessTokenService,
  ],
})
export class MessagingModule {}
