import * as z from "zod";
import { paginationSearchParamsSchema } from "./common";
import { DEFAULT_SORT_DIRECTION, DEFAULT_SORT_OPTION } from "@/constants/event";

export const eventSearchParamsSchema = z.object({
  ...paginationSearchParamsSchema.shape,
  sortBy: z
    .enum(["status", "name", "startDate", "endDate", "maxChests"])
    .catch(DEFAULT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_SORT_DIRECTION),
});

export type EventSearchParams = z.infer<typeof eventSearchParamsSchema>;
