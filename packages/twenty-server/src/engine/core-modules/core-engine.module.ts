import { Module } from '@nestjs/common';

import { WorkspaceModule } from 'src/engine/core-modules/workspace/workspace.module';
import { UserModule } from 'src/engine/core-modules/user/user.module';
import { RefreshTokenModule } from 'src/engine/core-modules/refresh-token/refresh-token.module';
import { AuthModule } from 'src/engine/core-modules/auth/auth.module';
import { FeatureFlagModule } from 'src/engine/core-modules/feature-flag/feature-flag.module';
import { OpenApiModule } from 'src/engine/core-modules/open-api/open-api.module';
import { TimelineMessagingModule } from 'src/engine/core-modules/messaging/timeline-messaging.module';
import { BillingModule } from 'src/engine/core-modules/billing/billing.module';
import { HealthModule } from 'src/engine/core-modules/health/health.module';

import { AnalyticsModule } from './analytics/analytics.module';
import { FileModule } from './file/file.module';
import { ClientConfigModule } from './client-config/client-config.module';

@Module({
  imports: [
    HealthModule,
    AnalyticsModule,
    AuthModule,
    BillingModule,
    ClientConfigModule,
    FeatureFlagModule,
    FileModule,
    OpenApiModule,
    RefreshTokenModule,
    TimelineMessagingModule,
    UserModule,
    WorkspaceModule,
  ],
  exports: [
    AnalyticsModule,
    AuthModule,
    FeatureFlagModule,
    TimelineMessagingModule,
    UserModule,
    WorkspaceModule,
  ],
})
export class CoreEngineModule {}
