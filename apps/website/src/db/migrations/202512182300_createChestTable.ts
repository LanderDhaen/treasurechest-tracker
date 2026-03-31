import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("chest")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("createdAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("updatedAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("isActive", "boolean", (c) => c.notNull().defaultTo(true))
    .addColumn("amount", "integer", (c) => c.notNull().defaultTo(1))
    .addColumn("openedAt", "timestamp", (c) =>
      c.notNull().unique().defaultTo("now()"),
    )

    // Foreign Keys

    .addColumn("rarityId", "integer", (c) =>
      c.references("rarity.id").notNull().onDelete("restrict"),
    )
    .addColumn("accountId", "integer", (c) =>
      c.references("account.id").notNull().onDelete("restrict"),
    )
    .addColumn("eventId", "integer", (c) =>
      c.references("event.id").notNull().onDelete("restrict"),
    )
    .addColumn("rewardId", "integer", (c) =>
      c.references("reward.id").notNull().onDelete("restrict"),
    )
    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("chest").execute();
};
