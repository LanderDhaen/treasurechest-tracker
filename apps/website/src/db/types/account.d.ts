import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface AccountTable {
  ID: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  tag: ColumnType<string>;
  townhall: ColumnType<number>;
  clanId: ColumnType<number>;
}

export type Account = Selectable<AccountTable>;
export type InsertableAccount = Insertable<AccountTable>;
export type UpdateableAccount = Updateable<AccountTable>;
