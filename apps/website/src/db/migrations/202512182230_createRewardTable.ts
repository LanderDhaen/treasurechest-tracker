import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const up = async (db: Kysely<any>) => {
  await db.schema
    .createTable("reward")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("createdAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("updatedAt", "timestamp", (c) => c.notNull().defaultTo("now()"))
    .addColumn("isActive", "boolean", (c) => c.notNull().defaultTo(true))
    .addColumn("name", "varchar", (c) => c.notNull().unique())
    .addColumn("slug", "varchar", (c) => c.notNull().unique())
    .addColumn("isObtainable", "boolean", (c) => c.notNull().defaultTo(true))

    // Foreign keys

    .addColumn("categoryId", "integer", (c) =>
      c.references("category.id").notNull().onDelete("restrict"),
    )
    .execute();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const down = async (db: Kysely<any>) => {
  await db.schema.dropTable("reward").execute();
};
