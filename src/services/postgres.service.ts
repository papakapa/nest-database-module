import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

import { Query, QueryCommand, QueryResult } from '../interfaces';
import { POSTGRES_POOL } from '../definitions/database-module.definition';

@Injectable()
export class PostgresService {
  constructor(@Inject(POSTGRES_POOL) private readonly pool: Pool) {}

  async query<T extends {}>(query: string, params?: unknown[]): Promise<QueryResult<T>>  {
    const res = await this.pool.query(query, params);

    return {
      command: res.command as QueryCommand,
      rows: res.rows,
      count: res.rowCount
    }
  }

  async transact(queries: Query[]) {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');

      for (let query of queries) {
        await client.query(query.sql, query.params);
        if (query.shouldBeCommitted) {
          await client.query('COMMIT')
        }
      }

      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  }
}
