import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface EventTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  code: ColumnType<string>;
  isGift: ColumnType<boolean>;
}

export type Event = Selectable<EventTable>;
export type InsertableEvent = Insertable<EventTable>;
export type UpdateableEvent = Updateable<EventTable>;
