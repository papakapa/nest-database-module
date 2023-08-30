<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">Nest Js Database Modules</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
<a href="https://www.npmjs.com/package/@papakapa/nest-database-module">
    <img src="https://img.shields.io/badge/papakapa-npm-4ba0f6" />
  </a>

</div>

# Get started

## Installation

Install via NPM:

```shell
npm install uploader
```

Or via YARN:

```
yarn add uploader
```

## Usage

### Postgres

Declare module:

```typescript
@Module({
  imports: [
    PostgresModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        port: 5432,
        database: 'postgres',
      }),
    })
  ],
})
```

Service: 

```typescript
@Injectable()
export class TestRepository {
  constructor(private readonly postgresService: PostgresService) {}
  async getById(id: string) {
    const sql = 'SELECT * FROM test WHERE id = $1';
    
    return this.postgresService.query(sql, [id]);
  }
}
```

`PostgresService.query`: 

```typescript
await PostgresService.query(
      'INSERT INTO test(id) VALUES($1);',
      [test.id],
    );
```

`PostgresService.transact`:

```typescript
const queries = [
  {
    sql: 'INSERT INTO test(id) VALUES($1);',
    params: [test.id],
  },
  {
    sql: 'INSERT INTO test_1(id) VALUES($1);',
    params: [test1.id],
  },
];
await this.pgService.transact(queries);
```


## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Author

[**papakapa**](https://github.com/papakapa)

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
