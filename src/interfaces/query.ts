export interface Query {
  sql: string;
  params: unknown[];
  shouldBeCommitted?: boolean;
}
