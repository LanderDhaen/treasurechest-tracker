import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants/common";
import { RELEASE_YEAR } from "@/constants/event";
import * as z from "zod";

export const searchSchema = z.object({
  search: z.string().optional(),
});

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).catch(DEFAULT_PAGE),
  pageSize: z.coerce.number().int().catch(DEFAULT_PAGE_SIZE),
});

export const dashboardFiltersSchema = z.object({
  year: z.coerce
    .number()
    .int()
    .min(RELEASE_YEAR)
    .max(new Date().getFullYear())
    .optional()
    .catch(undefined),
  tracked: z.stringbool().optional().catch(false),
});
