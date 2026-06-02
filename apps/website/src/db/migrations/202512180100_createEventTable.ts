import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("event")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("createdAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("updatedAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("isActive", "boolean", (c) => c.notNull().defaultTo(true))
    .addColumn("name", "varchar")
    .addColumn("edition", "integer", (c) => c.notNull())
    .addColumn("code", "varchar", (c) => c.notNull().unique())
    .addColumn("startDate", "date", (c) => c.notNull())
    .addColumn("endDate", "date", (c) => c.notNull())
    .addColumn("maxChests", "integer", (c) => c.notNull())
    .addColumn("isChestCreationAllowed", "boolean", (c) =>
      c.notNull().defaultTo(true),
    )

    // Foreign keys

    .addColumn("typeId", "integer", (c) =>
      c.references("type.id").onDelete("restrict").notNull(),
    )

    .addColumn("seriesId", "integer", (c) =>
      c.references("series.id").onDelete("restrict").notNull(),
    )

    .execute();

  // History Table

  await db.schema
    .createTable("event_history")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("validFrom", "timestamp", (c) => c.notNull())
    .addColumn("validTo", "timestamp", (c) => c.notNull())
    .addColumn("name", "varchar")
    .addColumn("edition", "integer", (c) => c.notNull())
    .addColumn("code", "varchar", (c) => c.notNull())
    .addColumn("startDate", "date", (c) => c.notNull())
    .addColumn("endDate", "date", (c) => c.notNull())
    .addColumn("maxChests", "integer", (c) => c.notNull())
    .addColumn("isChestCreationAllowed", "boolean", (c) => c.notNull())

    // Foreign keys

    .addColumn("typeId", "integer", (c) =>
      c.references("type.id").onDelete("restrict").notNull(),
    )

    .addColumn("seriesId", "integer", (c) =>
      c.references("series.id").onDelete("restrict").notNull(),
    )

    .addColumn("eventId", "integer", (c) =>
      c.references("event.id").onDelete("cascade").notNull(),
    )

    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("event_history").execute();
  await db.schema.dropTable("event").execute();
};
