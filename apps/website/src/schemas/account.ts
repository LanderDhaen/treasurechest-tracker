import * as z from "zod";
import { paginationSchema, searchSchema } from "./common";
import {
  DEFAULT_SORT_DIRECTION,
  DEFAULT_SORT_OPTION,
} from "@/constants/account";

export const accountSearchParamsSchema = z.object({
  ...searchSchema.shape,
  ...paginationSchema.shape,
  sortBy: z.enum(["townhall", "name", "clan"]).catch(DEFAULT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_SORT_DIRECTION),
});

export type AccountSearchParams = z.infer<typeof accountSearchParamsSchema>;

export const accountFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  tag: z.string().min(1, "Tag is required"),
  townhall: z.number().min(1, "Townhall is required"),
  clanTag: z.string().min(1, "Clan is required"),
});

export type AccountFormValues = z.infer<typeof accountFormSchema>;
