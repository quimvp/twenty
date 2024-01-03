import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';

export type CallWebhookJobData = {
  targetUrl: string;
  recordData: any;
};

@Injectable()
export class CallWebhookJob implements MessageQueueJob<CallWebhookJobData> {
  private readonly logger = new Logger(CallWebhookJob.name);

  constructor(private readonly httpService: HttpService) {}

  async handle(data: CallWebhookJobData): Promise<void> {
    this.httpService.axiosRef
      .post(data.targetUrl, data.recordData)
      .catch((err) => {
        throw new Error(
          `Error calling webhook on targetUrl '${data.targetUrl}' with data '${data.recordData}': ${err}`,
        );
      });

    this.logger.log(
      `CallWebhookJob called on targetUrl '${
        data.targetUrl
      }' with data: ${JSON.stringify(data.recordData)}`,
    );
  }
}
