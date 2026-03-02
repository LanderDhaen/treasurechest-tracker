import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("edition")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("number", "integer", (c) => c.notNull())
    .addColumn("code", "varchar", (c) => c.notNull().unique())
    .addColumn("startDate", "date", (c) => c.notNull())
    .addColumn("endDate", "date", (c) => c.notNull())
    .addColumn("maxChests", "integer", (c) => c.notNull().defaultTo(0))

    // Foreign keys

    .addColumn("eventId", "integer", (c) =>
      c.references("event.id").onDelete("restrict").notNull(),
    )

    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("edition").execute();
};
