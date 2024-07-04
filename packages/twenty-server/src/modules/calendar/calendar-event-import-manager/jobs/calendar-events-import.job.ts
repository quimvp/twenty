import { Scope } from '@nestjs/common';

import { Processor } from 'src/engine/integrations/message-queue/decorators/processor.decorator';
import { MessageQueue } from 'src/engine/integrations/message-queue/message-queue.constants';
import { Process } from 'src/engine/integrations/message-queue/decorators/process.decorator';
import { CalendarEventsImportService } from 'src/modules/calendar/calendar-event-import-manager/services/calendar-events-import.service';
import { isThrottled } from 'src/modules/connected-account/utils/is-throttled';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import {
  CalendarChannelSyncStage,
  CalendarChannelWorkspaceEntity,
} from 'src/modules/calendar/common/standard-objects/calendar-channel.workspace-entity';
import { WorkspaceRepository } from 'src/engine/twenty-orm/repository/workspace.repository';
import { InjectWorkspaceRepository } from 'src/engine/twenty-orm/decorators/inject-workspace-repository.decorator';

export type CalendarEventsImportJobData = {
  calendarChannelId: string;
  workspaceId: string;
};

@Processor({
  queueName: MessageQueue.calendarQueue,
  scope: Scope.REQUEST,
})
export class CalendarEventsImportJob {
  constructor(
    private readonly googleCalendarSyncService: CalendarEventsImportService,
    @InjectObjectMetadataRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
    @InjectWorkspaceRepository(CalendarChannelWorkspaceEntity)
    private readonly calendarChannelRepository: WorkspaceRepository<CalendarChannelWorkspaceEntity>,
  ) {}

  @Process(CalendarEventsImportJob.name)
  async handle(data: CalendarEventsImportJobData): Promise<void> {
    const { workspaceId, calendarChannelId } = data;

    const calendarChannel = await this.calendarChannelRepository.findOne({
      where: {
        id: calendarChannelId,
        syncStage: CalendarChannelSyncStage.CALENDAR_EVENTS_IMPORT_PENDING,
      },
    });

    if (!calendarChannel || !calendarChannel?.isSyncEnabled) {
      return;
    }

    if (
      isThrottled(
        calendarChannel.syncStageStartedAt,
        calendarChannel.throttleFailureCount,
      )
    ) {
      return;
    }

    const connectedAccount =
      await this.connectedAccountRepository.getConnectedAccountOrThrow(
        workspaceId,
        calendarChannel.connectedAccountId,
      );

    await this.googleCalendarSyncService.processCalendarEventsImport(
      calendarChannel,
      connectedAccount,
      workspaceId,
    );
  }
}
