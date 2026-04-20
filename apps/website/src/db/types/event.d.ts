import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface EventTable {
  id: Generated<number>;
  createdAt: ColumnType<Date, never, never>;
  updatedAt: ColumnType<Date, never, Date>;
  isActive: ColumnType<boolean, never, boolean>;
  edition: ColumnType<number>;
  code: ColumnType<string>;
  startDate: ColumnType<Date>;
  endDate: ColumnType<Date>;
  maxChests: ColumnType<number>;
  isChestCreationAllowed: ColumnType<boolean, never, boolean>;
  typeId: ColumnType<number>;
  seriesId: ColumnType<number>;
}

export type Event = Selectable<EventTable>;
export type InsertableEvent = Insertable<EventTable>;
export type UpdateableEvent = Updateable<EventTable>;

export interface EventHistoryTable {
  id: Generated<number>;
  validFrom: ColumnType<Date>;
  validTo: ColumnType<Date>;
  edition: ColumnType<number>;
  code: ColumnType<string>;
  startDate: ColumnType<Date>;
  endDate: ColumnType<Date>;
  maxChests: ColumnType<number>;
  isChestCreationAllowed: ColumnType<boolean>;
  typeId: ColumnType<number>;
  seriesId: ColumnType<number>;
  eventId: ColumnType<number>;
}

export type EventHistory = Selectable<EventHistoryTable>;
export type InsertableEventHistory = Insertable<EventHistoryTable>;
export type UpdateableEventHistory = Updateable<EventHistoryTable>;
