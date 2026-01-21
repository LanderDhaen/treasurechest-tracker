import * as z from "zod";
import { PaginationSchema } from "./common";

export const accountSearchParamsSchema = z.object({
  ...PaginationSchema.shape,
  sortBy: z.enum(["townhall", "name", "clan"]).catch("name"),
  direction: z.enum(["asc", "desc"]).catch("asc"),
});

export type AccountSearchParams = z.infer<typeof accountSearchParamsSchema>;
