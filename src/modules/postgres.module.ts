import { Pool } from 'pg';
import { Global, Module } from '@nestjs/common';

import { PostgresService } from '../services/postgres.service';
import { PostgresOptions } from '../interfaces/postgres.options';
import { DATABASE_MODULE, DATABASE_OPTIONS, POSTGRES_POOL } from '../definitions/database-module.definition';

@Global()
@Module({
  providers: [
    PostgresService,
    {
      provide: POSTGRES_POOL,
      inject: [DATABASE_OPTIONS],
      useFactory: (options: PostgresOptions) => {
        return new Pool({...options});
      },
    },
  ],
  exports: [PostgresService],
})
export class PostgresModule extends DATABASE_MODULE {}
