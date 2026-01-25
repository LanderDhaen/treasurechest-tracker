import * as z from "zod";
import {
  paginationSearchParamsSchema,
  searchSearchParamsSchema,
} from "./common";
import {
  DEFAULT_SORT_DIRECTION,
  DEFAULT_SORT_OPTION,
} from "@/constants/account";

export const accountSearchParamsSchema = z.object({
  ...searchSearchParamsSchema.shape,
  ...paginationSearchParamsSchema.shape,
  sortBy: z.enum(["townhall", "name", "clan"]).catch(DEFAULT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_SORT_DIRECTION),
});

export type AccountSearchParams = z.infer<typeof accountSearchParamsSchema>;
