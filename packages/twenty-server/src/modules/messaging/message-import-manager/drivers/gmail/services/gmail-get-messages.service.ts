import { Injectable, Logger } from '@nestjs/common';

import { AxiosResponse } from 'axios';

import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import { GmailFetchByBatchService } from 'src/modules/messaging/message-import-manager/drivers/gmail/services/gmail-fetch-by-batch.service';
import { parseAndFormatGmailMessage } from 'src/modules/messaging/message-import-manager/drivers/gmail/utils/parse-and-format-gmail-message.util';
import { MessageWithParticipants } from 'src/modules/messaging/message-import-manager/types/message';
import { isDefined } from 'src/utils/is-defined';

@Injectable()
export class GmailGetMessagesService {
  private readonly logger = new Logger(GmailGetMessagesService.name);

  constructor(
    private readonly fetchByBatchesService: GmailFetchByBatchService,
  ) {}

  async getMessages(
    messageIds: string[],
    connectedAccount: Pick<
      ConnectedAccountWorkspaceEntity,
      'accessToken' | 'refreshToken' | 'id' | 'handle' | 'handleAliases'
    >,
    workspaceId: string,
  ): Promise<MessageWithParticipants[]> {
    let startTime = Date.now();

    const { messageIdsByBatch, batchResponses } =
      await this.fetchByBatchesService.fetchAllByBatches(
        messageIds,
        connectedAccount.accessToken,
        'batch_gmail_messages',
      );
    let endTime = Date.now();

    this.logger.log(
      `Messaging import for workspace ${workspaceId} and account ${connectedAccount.id} fetching ${
        messageIds.length
      } messages in ${endTime - startTime}ms`,
    );

    startTime = Date.now();

    const messages = batchResponses.flatMap((response, index) => {
      return this.formatBatchResponseAsMessage(
        messageIdsByBatch[index],
        response,
        connectedAccount,
      );
    });

    endTime = Date.now();

    this.logger.log(
      `Messaging import for workspace ${workspaceId} and account ${connectedAccount.id} formatting ${
        messageIds.length
      } messages in ${endTime - startTime}ms`,
    );

    return messages;
  }

  private formatBatchResponseAsMessage(
    messageIds: string[],
    responseCollection: AxiosResponse<any, any>,
    connectedAccount: Pick<
      ConnectedAccountWorkspaceEntity,
      'handle' | 'handleAliases'
    >,
  ): MessageWithParticipants[] {
    const parsedResponses =
      this.fetchByBatchesService.parseBatch(responseCollection);

    const messages = parsedResponses.map((response, index) => {
      if ('error' in response) {
        if (response.error.code === 404) {
          return null;
        }

        throw { ...response.error, messageId: messageIds[index] };
      }

      return parseAndFormatGmailMessage(response, connectedAccount);
    });

    return messages.filter(isDefined);
  }
}
