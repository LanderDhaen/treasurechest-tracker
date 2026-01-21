import * as z from "zod";
import { paginationSearchParamsSchema } from "./common";

export const eventSearchParamsSchema = z.object({
  ...paginationSearchParamsSchema.shape,
  sortBy: z
    .enum(["status", "name", "startDate", "endDate", "maxChests"])
    .catch("endDate"),
  direction: z.enum(["asc", "desc"]).catch("desc"),
});

export type EventSearchParams = z.infer<typeof eventSearchParamsSchema>;
