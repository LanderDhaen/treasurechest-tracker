import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface EditionTable {
  id: Generated<number>;
  number: ColumnType<number>;
  code: ColumnType<string>;
  startDate: ColumnType<Date>;
  endDate: ColumnType<Date>;
  maxChests: ColumnType<number>;
  eventId: ColumnType<number>;
}

export type Edition = Selectable<EditionTable>;
export type InsertableEdition = Insertable<EditionTable>;
export type UpdateableEdition = Updateable<EditionTable>;
