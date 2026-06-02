import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("account")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("createdAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("updatedAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("isActive", "boolean", (c) => c.notNull().defaultTo(true))
    .addColumn("name", "varchar", (c) => c.notNull())
    .addColumn("tag", "varchar", (c) => c.notNull().unique())
    .addColumn("isTracked", "boolean", (c) => c.notNull().defaultTo(true))

    // Foreign keys

    .addColumn("townhallId", "integer", (c) =>
      c.references("townhall.id").notNull().onDelete("restrict"),
    )

    .addColumn("clanId", "integer", (c) =>
      c.references("clan.id").notNull().onDelete("restrict"),
    )
    .execute();

  // History Table

  await db.schema
    .createTable("account_history")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("validFrom", "timestamp", (c) => c.notNull())
    .addColumn("validTo", "timestamp", (c) => c.notNull())
    .addColumn("name", "varchar", (c) => c.notNull())
    .addColumn("tag", "varchar", (c) => c.notNull())
    .addColumn("isTracked", "boolean", (c) => c.notNull())

    // Foreign keys

    .addColumn("townhallId", "integer", (c) =>
      c.references("townhall.id").notNull().onDelete("restrict"),
    )

    .addColumn("clanId", "integer", (c) =>
      c.references("clan.id").notNull().onDelete("restrict"),
    )

    .addColumn("accountId", "integer", (c) =>
      c.references("account.id").notNull().onDelete("cascade"),
    )
    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("account_history").execute();
  await db.schema.dropTable("account").execute();
};
