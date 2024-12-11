import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { townhall } from "./townhall";

export const account = pgTable("account", {
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
  username: text().notNull(),
  townhallID: uuid()
    .references(() => townhall.ID)
    .notNull(),
});
