import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface TypeTable {
  id: Generated<number>;
  createdAt: ColumnType<Date, never, never>;
  updatedAt: ColumnType<Date, never, Date>;
  isActive: ColumnType<boolean, never, boolean>;
  name: ColumnType<string>;
  slug: ColumnType<string>;
}

export type Type = Selectable<TypeTable>;
export type InsertableType = Insertable<TypeTable>;
export type UpdateableType = Updateable<TypeTable>;
