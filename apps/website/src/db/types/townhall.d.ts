import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface TownhallTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  level: ColumnType<number>;
  rank: ColumnType<number>;
  releasedOn: ColumnType<Date>;
}

export type Townhall = Selectable<TownhallTable>;
export type InsertableTownhall = Insertable<TownhallTable>;
export type UpdateableTownhall = Updateable<TownhallTable>;
