import { Database } from "./types/database";
import { Pool } from "pg";
import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";

export const dialect = new PostgresDialect({
  pool: new Pool({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  }),
});

export const db = new Kysely<Database>({
  dialect,
  plugins: [new CamelCasePlugin()],
});
