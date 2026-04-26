import * as z from "zod";
import { paginationSchema, searchSchema } from "./common";
import {
  DEFAULT_CHEST_SORT_DIRECTION,
  DEFAULT_CHEST_SORT_OPTION,
} from "@/constants/chest";
import { RELEASE_DATE } from "@/constants/event";
import { formatDate } from "@/lib/utils";

export const chestSearchParamsSchema = z.object({
  ...searchSchema.shape,
  ...paginationSchema.shape,
  sortBy: z
    .enum(["rarity", "reward", "openedAt", "account", "event"])
    .catch(DEFAULT_CHEST_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_CHEST_SORT_DIRECTION),
  accounts: z.array(z.string()).optional(),
  events: z.array(z.string()).optional(),
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
    .date("Opening time must be a valid date")
    .refine(
      (date) => date >= RELEASE_DATE,
      `Opening time cannot be before the release date ${formatDate(RELEASE_DATE)}`,
    )
    .refine(
      (date) => date <= new Date(),
      "Opening time cannot be in the future",
    ),
});

export type ChestFormValues = z.infer<typeof chestFormSchema>;

export const chestFormSearchParamsSchema = z.object({
  account: z.string().optional(),
  event: z.string().optional(),
});

export type ChestFormSearchParams = z.infer<typeof chestFormSearchParamsSchema>;
