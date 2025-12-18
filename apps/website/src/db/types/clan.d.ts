import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface ClanTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  tag: ColumnType<string>;
}

export type Clan = Selectable<ClanTable>;
export type InsertableClan = Insertable<ClanTable>;
export type UpdateableClan = Updateable<ClanTable>;
