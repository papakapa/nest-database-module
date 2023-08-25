import { ConfigurableModuleBuilder } from '@nestjs/common';

import { PostgresOptions } from '../interfaces/postgres.options';

export const POSTGRES_POOL = 'POSTGRES_POOL';
export const {
  ConfigurableModuleClass: DATABASE_MODULE,
  MODULE_OPTIONS_TOKEN: DATABASE_OPTIONS,
} = new ConfigurableModuleBuilder<PostgresOptions>()
  .setClassMethodName('forRoot')
  .build();
