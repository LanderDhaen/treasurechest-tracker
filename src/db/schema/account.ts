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
  "Lander''s Legion",
]);

export const statusEnum = pgEnum("status", [
  "Farming",
  "Wars Only",
  "Inactive",
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
  status: statusEnum().notNull(),
  townhallID: uuid()
    .references(() => townhall.ID)
    .notNull(),
});
