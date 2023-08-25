import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

import { POSTGRES_POOL } from '../definitions/database-module.definition';

@Injectable()
export class PostgresService {
  constructor(@Inject(POSTGRES_POOL) private readonly pool: Pool) {}

  async query(query: string, params?: unknown[]) {
    return this.pool.query(query, params);
  }
}
