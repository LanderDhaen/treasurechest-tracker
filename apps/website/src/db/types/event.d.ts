import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface EventTable {
  ID: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  startDate: ColumnType<Date>;
  endDate: ColumnType<Date>;
  maxChests: ColumnType<number>;
}

export type Event = Selectable<EventTable>;
export type InsertableEvent = Insertable<EventTable>;
export type UpdateableEvent = Updateable<EventTable>;
