import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { ObjectRecordCreateEvent } from 'src/engine/integrations/event-emitter/types/object-record-create.event';
import { ObjectRecordUpdateEvent } from 'src/engine/integrations/event-emitter/types/object-record-update.event';
import { ObjectRecordBaseEvent } from 'src/engine/integrations/event-emitter/types/object-record.base.event';
import { objectRecordChangedValues } from 'src/engine/integrations/event-emitter/utils/object-record-changed-values';
import { InjectMessageQueue } from 'src/engine/integrations/message-queue/decorators/message-queue.decorator';
import { MessageQueue } from 'src/engine/integrations/message-queue/message-queue.constants';
import { MessageQueueService } from 'src/engine/integrations/message-queue/services/message-queue.service';
import { CreateAuditLogFromInternalEvent } from 'src/modules/timeline/jobs/create-audit-log-from-internal-event';
import { UpsertTimelineActivityFromInternalEvent } from 'src/modules/timeline/jobs/upsert-timeline-activity-from-internal-event.job';

@Injectable()
export class EntityEventsToDbListener {
  constructor(
    @InjectMessageQueue(MessageQueue.entityEventsToDbQueue)
    private readonly messageQueueService: MessageQueueService,
  ) {}

  @OnEvent('*.created')
  async handleCreate(payload: ObjectRecordCreateEvent<any>[]) {
    return this.handle(payload);
  }

  @OnEvent('*.updated')
  async handleUpdate(payload: ObjectRecordUpdateEvent<any>[]) {
    for (const eventPayload of payload) {
      eventPayload.properties.diff = objectRecordChangedValues(
        eventPayload.properties.before,
        eventPayload.properties.after,
        eventPayload.properties.updatedFields,
        eventPayload.objectMetadata,
      );
    }

    return this.handle(payload);
  }

  // @OnEvent('*.deleted') - TODO: implement when we soft delete has been implemented
  // ....

  // @OnEvent('*.restored') - TODO: implement when we soft delete has been implemented
  // ....

  private async handle(payload: ObjectRecordBaseEvent[]) {
    for (const eventPayload of payload) {
      if (!eventPayload.objectMetadata?.isAuditLogged) {
        return;
      }

      await this.messageQueueService.add<ObjectRecordBaseEvent>(
        CreateAuditLogFromInternalEvent.name,
        eventPayload,
      );

      await this.messageQueueService.add<ObjectRecordBaseEvent>(
        UpsertTimelineActivityFromInternalEvent.name,
        eventPayload,
      );
    }
  }
}
