import { Injectable } from '@nestjs/common';

import { EntityManager } from 'typeorm';
import { v4 } from 'uuid';

import { TwentyORMManager } from 'src/engine/twenty-orm/twenty-orm.manager';
import { MessageChannelMessageAssociationWorkspaceEntity } from 'src/modules/messaging/common/standard-objects/message-channel-message-association.workspace-entity';
import { MessageThreadWorkspaceEntity } from 'src/modules/messaging/common/standard-objects/message-thread.workspace-entity';
import { MessageWorkspaceEntity } from 'src/modules/messaging/common/standard-objects/message.workspace-entity';
import { GmailMessage } from 'src/modules/messaging/message-import-manager/drivers/gmail/types/gmail-message';

@Injectable()
export class MessagingMessageService {
  constructor(private readonly twentyORMManager: TwentyORMManager) {}

  public async saveMessagesWithinTransaction(
    messages: GmailMessage[],
    messageChannelId: string,
    transactionManager: EntityManager,
  ): Promise<Map<string, string>> {
    const messageChannelMessageAssociationRepository =
      await this.twentyORMManager.getRepository<MessageChannelMessageAssociationWorkspaceEntity>(
        'messageChannelMessageAssociation',
      );

    const messageRepository =
      await this.twentyORMManager.getRepository<MessageWorkspaceEntity>(
        'message',
      );

    const messageThreadRepository =
      await this.twentyORMManager.getRepository<MessageThreadWorkspaceEntity>(
        'messageThread',
      );

    const messageExternalIdsAndIdsMap = new Map<string, string>();

    for (const message of messages) {
      const existingMessageChannelMessageAssociation =
        await messageChannelMessageAssociationRepository.findOne(
          {
            where: {
              messageExternalId: message.externalId,
              messageChannelId: messageChannelId,
            },
          },
          transactionManager,
        );

      if (existingMessageChannelMessageAssociation) {
        continue;
      }

      const existingMessage = await messageRepository.findOne({
        where: {
          headerMessageId: message.headerMessageId,
        },
      });

      if (existingMessage) {
        messageExternalIdsAndIdsMap.set(message.externalId, existingMessage.id);

        await messageChannelMessageAssociationRepository.insert(
          {
            messageChannelId,
            messageId: existingMessage.id,
            messageExternalId: message.externalId,
            messageThreadExternalId: message.messageThreadExternalId,
          },
          transactionManager,
        );

        continue;
      }

      const newMessageThreadId = v4();

      await messageThreadRepository.insert(
        { id: newMessageThreadId },
        transactionManager,
      );

      const newMessageId = v4();

      await messageRepository.insert(
        {
          id: newMessageId,
          headerMessageId: message.headerMessageId,
          subject: message.subject,
          receivedAt: message.internalDate,
          direction:
            message.fromHandle === message.fromHandle ? 'outgoing' : 'incoming',
          text: message.text,
          messageThreadId: newMessageThreadId,
        },
        transactionManager,
      );

      messageExternalIdsAndIdsMap.set(message.externalId, newMessageId);

      await messageChannelMessageAssociationRepository.insert(
        {
          messageChannelId,
          messageId: newMessageId,
          messageExternalId: message.externalId,
          messageThreadExternalId: message.messageThreadExternalId,
        },
        transactionManager,
      );

      continue;
    }

    return messageExternalIdsAndIdsMap;
  }
}
