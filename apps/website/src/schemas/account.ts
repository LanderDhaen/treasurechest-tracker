import * as z from "zod";
import { paginationSearchParamsSchema } from "./common";

export const accountSearchParamsSchema = z.object({
  ...paginationSearchParamsSchema.shape,
  sortBy: z.enum(["townhall", "name", "clan"]).catch("name"),
  direction: z.enum(["asc", "desc"]).catch("asc"),
});

export type AccountSearchParams = z.infer<typeof accountSearchParamsSchema>;
