import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("event")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("edition", "integer", (c) => c.notNull())
    .addColumn("code", "varchar", (c) => c.notNull().unique())
    .addColumn("startDate", "date", (c) => c.notNull())
    .addColumn("endDate", "date", (c) => c.notNull())
    .addColumn("maxChests", "integer", (c) => c.notNull().defaultTo(0))

    // Foreign keys

    .addColumn("typeId", "integer", (c) =>
      c.references("type.id").onDelete("restrict").notNull(),
    )

    .addColumn("seriesId", "integer", (c) =>
      c.references("series.id").onDelete("restrict").notNull(),
    )

    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("event").execute();
};
