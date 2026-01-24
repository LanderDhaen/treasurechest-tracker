import * as z from "zod";
import { paginationSearchParamsSchema } from "./common";
import { DEFAULT_SORT_DIRECTION, DEFAULT_SORT_OPTION } from "@/constants/chest";

export const chestSearchParamsSchema = z.object({
  ...paginationSearchParamsSchema.shape,
  sortBy: z
    .enum(["rarity", "reward", "openedAt", "account", "event"])
    .catch(DEFAULT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_SORT_DIRECTION),
});

export type ChestSearchParams = z.infer<typeof chestSearchParamsSchema>;
