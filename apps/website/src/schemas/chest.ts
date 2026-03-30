import * as z from "zod";
import { paginationSchema, searchSchema } from "./common";
import { DEFAULT_SORT_DIRECTION, DEFAULT_SORT_OPTION } from "@/constants/chest";

export const chestSearchParamsSchema = z.object({
  ...searchSchema.shape,
  ...paginationSchema.shape,
  sortBy: z
    .enum(["rarity", "reward", "openedAt", "account", "event"])
    .catch(DEFAULT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_SORT_DIRECTION),
});

export type ChestSearchParams = z.infer<typeof chestSearchParamsSchema>;

export const chestFormSchema = z.object({
  accountTag: z.string().min(1, "Account is required"),
  eventCode: z.string().min(1, "Event is required"),
  raritySlug: z.string().min(1, "Rarity is required"),
  amount: z
    .int("Amount must be an integer")
    .min(1, "Amount must be at least 1"),
  rewardSlug: z.string().min(1, "Reward is required"),
  openedAt: z
    .date("Opened at must be a valid date")
    .refine((date) => date <= new Date(), "Opened at cannot be in the future"),
});

export type ChestFormValues = z.infer<typeof chestFormSchema>;
