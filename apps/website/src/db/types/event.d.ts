import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface EventTable {
  id: Generated<number>;
  edition: ColumnType<number>;
  code: ColumnType<string>;
  startDate: ColumnType<Date>;
  endDate: ColumnType<Date>;
  maxChests: ColumnType<number>;
  typeId: ColumnType<number>;
  seriesId: ColumnType<number>;
}

export type Event = Selectable<EventTable>;
export type InsertableEvent = Insertable<EventTable>;
export type UpdateableEvent = Updateable<EventTable>;
