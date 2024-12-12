import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { townhall } from "./townhall";

export const clanEnum = pgEnum("clan", [
  "Dutch Legion 3",
  "Dutch Legion CW",
  "Dutch Legion 4",
]);

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
  clan: clanEnum().notNull(),
  isActive: boolean().notNull().default(true),
  townhallID: uuid()
    .references(() => townhall.ID)
    .notNull(),
});
