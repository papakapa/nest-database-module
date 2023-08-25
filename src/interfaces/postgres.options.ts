export interface PostgresOptions {
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
  connectionString?: string;
  ssl?: any;
  types?: any;
  statement_timeout?: number;
  query_timeout?: number;
  application_name?: string;
  idle_in_transaction_session_timeout?: number;
  max?: number;
  connectionTimeoutMillis?: number;
  idleTimeoutMillis?: number;
  allowExitOnIdle?: boolean;
}
