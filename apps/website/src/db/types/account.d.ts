import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface AccountTable {
  id: Generated<number>;
  createdAt: ColumnType<Date, never, never>;
  updatedAt: ColumnType<Date, never, Date>;
  isActive: ColumnType<boolean, never, boolean>;
  name: ColumnType<string>;
  tag: ColumnType<string>;
  townhall: ColumnType<number>;
  isTracked: ColumnType<boolean, never, boolean>;
  clanId: ColumnType<number>;
}

export type Account = Selectable<AccountTable>;
export type InsertableAccount = Insertable<AccountTable>;
export type UpdateableAccount = Updateable<AccountTable>;
