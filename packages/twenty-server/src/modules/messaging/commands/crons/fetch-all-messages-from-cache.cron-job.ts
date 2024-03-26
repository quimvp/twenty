import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, In } from 'typeorm';

import { MessageQueueJob } from 'src/engine/integrations/message-queue/interfaces/message-queue-job.interface';

import {
  FeatureFlagEntity,
  FeatureFlagKeys,
} from 'src/engine/core-modules/feature-flag/feature-flag.entity';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';
import { DataSourceEntity } from 'src/engine/metadata-modules/data-source/data-source.entity';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { MessageChannelRepository } from 'src/modules/messaging/repositories/message-channel.repository';
import { MessageChannelObjectMetadata } from 'src/modules/messaging/standard-objects/message-channel.object-metadata';
import { GmailFetchMessageContentFromCacheService } from 'src/modules/messaging/services/gmail-fetch-message-content-from-cache/gmail-fetch-message-content-from-cache.service';

@Injectable()
export class FetchAllMessagesFromCacheCronJob
  implements MessageQueueJob<undefined>
{
  private readonly logger = new Logger(FetchAllMessagesFromCacheCronJob.name);

  constructor(
    @InjectRepository(Workspace, 'core')
    private readonly workspaceRepository: Repository<Workspace>,
    @InjectRepository(DataSourceEntity, 'metadata')
    private readonly dataSourceRepository: Repository<DataSourceEntity>,
    @InjectObjectMetadataRepository(MessageChannelObjectMetadata)
    private readonly messageChannelRepository: MessageChannelRepository,
    @InjectRepository(FeatureFlagEntity, 'core')
    private readonly featureFlagRepository: Repository<FeatureFlagEntity>,
    private readonly gmailFetchMessageContentFromCacheService: GmailFetchMessageContentFromCacheService,
  ) {}

  async handle(): Promise<void> {
    const workspaceIds = (
      await this.workspaceRepository.find({
        where: {
          subscriptionStatus: 'active',
        },
        select: ['id'],
      })
    ).map((workspace) => workspace.id);

    const workspacesWithFeatureFlagActive =
      await this.featureFlagRepository.find({
        where: {
          workspaceId: In(workspaceIds),
          key: FeatureFlagKeys.IsFullSyncV2Enabled,
          value: true,
        },
      });

    const dataSources = await this.dataSourceRepository.find({
      where: {
        workspaceId: In(
          workspacesWithFeatureFlagActive.map((w) => w.workspaceId),
        ),
      },
    });

    const workspaceIdsWithDataSources = new Set(
      dataSources.map((dataSource) => dataSource.workspaceId),
    );

    for (const workspaceId of workspaceIdsWithDataSources) {
      await this.fetchWorkspaceMessages(workspaceId);
    }
  }

  private async fetchWorkspaceMessages(workspaceId: string): Promise<void> {
    try {
      const messageChannels =
        await this.messageChannelRepository.getAll(workspaceId);

      for (const messageChannel of messageChannels) {
        await this.gmailFetchMessageContentFromCacheService.fetchMessageContentFromCache(
          workspaceId,
          messageChannel.connectedAccountId,
        );
      }
    } catch (error) {
      this.logger.error(
        `Error while fetching workspace messages for workspace ${workspaceId}`,
      );
      this.logger.error(error);

      return;
    }
  }
}
