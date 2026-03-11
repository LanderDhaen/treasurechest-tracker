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
  updatedAt: ColumnType<Date, never, never>;
  isActive: ColumnType<boolean, never, never>;
  name: ColumnType<string>;
  tag: ColumnType<string>;
  townhall: ColumnType<number>;
  clanId: ColumnType<number>;
}

export type Account = Selectable<AccountTable>;
export type InsertableAccount = Insertable<AccountTable>;
export type UpdateableAccount = Updateable<AccountTable>;
