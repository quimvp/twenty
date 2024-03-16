import { Injectable } from '@nestjs/common';

import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/engine-metadata/data-source/data-source.service';
import { MessageThreadRepository } from 'src/modules/messaging/repositories/message-thread/message-thread.repository';
import { MessageRepository } from 'src/modules/messaging/repositories/message/message.repository';
import { deleteUsingPagination } from 'src/modules/messaging/services/thread-cleaner/utils/delete-using-pagination.util';

@Injectable()
export class ThreadCleanerService {
  constructor(
    private readonly dataSourceService: DataSourceService,
    private readonly typeORMService: TypeORMService,
    private readonly messageService: MessageRepository,
    private readonly messageThreadService: MessageThreadRepository,
  ) {}

  public async cleanWorkspaceThreads(workspaceId: string) {
    await deleteUsingPagination(
      workspaceId,
      500,
      this.messageService.getNonAssociatedMessageIdsPaginated.bind(
        this.messageService,
      ),
      this.messageService.deleteByIds.bind(this.messageService),
    );

    await deleteUsingPagination(
      workspaceId,
      500,
      this.messageThreadService.getOrphanThreadIdsPaginated.bind(
        this.messageThreadService,
      ),
      this.messageThreadService.deleteByIds.bind(this.messageThreadService),
    );
  }
}
