import { Database } from "@/db/types/database";
import { Expression, expressionBuilder } from "kysely";

export const Type = {
  getById: (typeId: Expression<number>) => {
    const eb = expressionBuilder<Database, never>();

    return eb
      .selectFrom("type")
      .select(["type.name"])
      .whereRef("id", "=", typeId);
  },
};
