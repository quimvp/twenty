import { Injectable, Logger } from '@nestjs/common';

import { MessageQueueJob } from 'src/engine/integrations/message-queue/interfaces/message-queue-job.interface';

import { CreateCompanyAndContactService } from 'src/modules/connected-account/auto-companies-and-contacts-creation/create-company-and-contact/create-company-and-contact.service';
import { MessageChannelRepository } from 'src/modules/messaging/repositories/message-channel/message-channel.repository';
import { MessageParticipantRepository } from 'src/modules/messaging/repositories/message-participant/message-participant.repository';

export type CreateCompaniesAndContactsAfterSyncJobData = {
  workspaceId: string;
  messageChannelId: string;
};

@Injectable()
export class CreateCompaniesAndContactsAfterSyncJob
  implements MessageQueueJob<CreateCompaniesAndContactsAfterSyncJobData>
{
  private readonly logger = new Logger(
    CreateCompaniesAndContactsAfterSyncJob.name,
  );
  constructor(
    private readonly createCompaniesAndContactsService: CreateCompanyAndContactService,
    private readonly messageChannelService: MessageChannelRepository,
    private readonly messageParticipantService: MessageParticipantRepository,
  ) {}

  async handle(
    data: CreateCompaniesAndContactsAfterSyncJobData,
  ): Promise<void> {
    this.logger.log(
      `create contacts and companies after sync for workspace ${data.workspaceId} and messageChannel ${data.messageChannelId}`,
    );
    const { workspaceId, messageChannelId } = data;

    const messageChannel = await this.messageChannelService.getByIds(
      [messageChannelId],
      workspaceId,
    );

    const { handle, isContactAutoCreationEnabled } = messageChannel[0];

    if (!isContactAutoCreationEnabled) {
      return;
    }

    const messageParticipantsWithoutPersonIdAndWorkspaceMemberId =
      await this.messageParticipantService.getByMessageChannelIdWithoutPersonIdAndWorkspaceMemberIdAndMessageOutgoing(
        messageChannelId,
        workspaceId,
      );

    await this.createCompaniesAndContactsService.createCompaniesAndContacts(
      handle,
      messageParticipantsWithoutPersonIdAndWorkspaceMemberId,
      workspaceId,
    );

    await this.messageParticipantService.updateMessageParticipantsAfterPeopleCreation(
      messageParticipantsWithoutPersonIdAndWorkspaceMemberId,
      workspaceId,
    );

    this.logger.log(
      `create contacts and companies after sync for workspace ${data.workspaceId} and messageChannel ${data.messageChannelId} done`,
    );
  }
}
