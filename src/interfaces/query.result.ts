export type QueryCommand = 'INSERT' | 'UPDATE' | 'CREATE' | 'SELECT';

export interface QueryResult<T extends {}> {
  rows: T[];
  command: QueryCommand;
  count: number | null;
}
