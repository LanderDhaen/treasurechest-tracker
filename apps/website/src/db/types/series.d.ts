import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface SeriesTable {
  id: Generated<number>;
  createdAt: ColumnType<Date, never, never>;
  updatedAt: ColumnType<Date, never, Date>;
  isActive: ColumnType<boolean, never, boolean>;
  name: ColumnType<string>;
  code: ColumnType<string>;
}

export type Series = Selectable<SeriesTable>;
export type InsertableSeries = Insertable<SeriesTable>;
export type UpdateableSeries = Updateable<SeriesTable>;
