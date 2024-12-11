import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const townhall = pgTable("townhall", {
  ID: uuid().defaultRandom().primaryKey().notNull(),
  createdAt: timestamp({
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp({
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .$onUpdate(() => new Date().toISOString())
    .notNull(),
  level: integer().unique("townhall_level_unique").notNull(),
  color: text().notNull(),
});
