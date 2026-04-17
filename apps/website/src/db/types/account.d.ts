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
  isTracked: ColumnType<boolean, never, boolean>;
  townhallId: ColumnType<number>;
  clanId: ColumnType<number>;
}

export type Account = Selectable<AccountTable>;
export type InsertableAccount = Insertable<AccountTable>;
export type UpdateableAccount = Updateable<AccountTable>;

export interface AccountHistoryTable {
  id: Generated<number>;
  validFrom: ColumnType<Date>;
  validTo: ColumnType<Date>;
  name: ColumnType<string>;
  tag: ColumnType<string>;
  isTracked: ColumnType<boolean>;
  townhallId: ColumnType<number>;
  clanId: ColumnType<number>;
  accountId: ColumnType<number>;
}
