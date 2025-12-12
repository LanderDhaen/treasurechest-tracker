import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("townhall")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("created_at", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("updated_at", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("is_active", "boolean", (c) => c.notNull().defaultTo(true))
    .addColumn("level", "integer", (c) => c.notNull())
    .addColumn("color", "varchar", (c) => c.notNull())
    .addColumn("released_at", "timestamp", (c) => c.notNull())
    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("townhall").execute();
};
