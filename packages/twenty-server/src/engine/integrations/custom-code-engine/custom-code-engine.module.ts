import { DynamicModule, Global } from '@nestjs/common';

import { CustomCodeEngineModuleAsyncOptions } from 'src/engine/integrations/custom-code-engine/interfaces/custom-code-engine.interface';

import { CustomCodeEngineService } from 'src/engine/integrations/custom-code-engine/custom-code-engine.service';
import { CUSTOM_CODE_ENGINE_DRIVER } from 'src/engine/integrations/custom-code-engine/custom-code-engine.constants';
import { LocalDriver } from 'src/engine/integrations/custom-code-engine/drivers/local.driver';

@Global()
export class CustomCodeEngineModule {
  static forRootAsync(
    options: CustomCodeEngineModuleAsyncOptions,
  ): DynamicModule {
    const provider = {
      provide: CUSTOM_CODE_ENGINE_DRIVER,
      useFactory: async (...args: any[]) => {
        const config = await options.useFactory(...args);

        return config?.type === 'local'
          ? new LocalDriver(
              config.options.fileStorageService,
              config.options.fileUploadService,
            )
          : undefined;
      },
      inject: options.inject || [],
    };

    return {
      module: CustomCodeEngineModule,
      imports: options.imports || [],
      providers: [CustomCodeEngineService, provider],
      exports: [CustomCodeEngineService],
    };
  }
}
