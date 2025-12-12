import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface TownhallTable {
  ID: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  level: ColumnType<number>;
  color: ColumnType<string>;
  releasedAt: ColumnType<Date>;
}

export type Townhall = Selectable<TownhallTable>;
export type InsertableTownhall = Insertable<TownhallTable>;
export type UpdateableTownhall = Updateable<TownhallTable>;
