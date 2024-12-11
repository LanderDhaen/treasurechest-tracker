import { pgTable, integer, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("townhall", {
  ID: uuid().defaultRandom().primaryKey().notNull(),
  level: integer().notNull(),
});
