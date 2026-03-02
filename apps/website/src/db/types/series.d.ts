import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface SeriesTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  code: ColumnType<string>;
  isGift: ColumnType<boolean>;
}

export type Series = Selectable<SeriesTable>;
export type InsertableSeries = Insertable<SeriesTable>;
export type UpdateableSeries = Updateable<SeriesTable>;
