import { createSelectSchema } from "drizzle-zod";
import { townhall } from "@/db/schema/townhall";

export const selectTownhallSchema = createSelectSchema(townhall).omit({
  createdAt: true,
  updatedAt: true,
});

export type Townhall = typeof selectTownhallSchema._type;
