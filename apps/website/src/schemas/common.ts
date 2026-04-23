import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants/common";
import { FIRST_EVENT_START_DATE } from "@/constants/event";
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
    .min(FIRST_EVENT_START_DATE.getFullYear())
    .max(new Date().getFullYear())
    .optional()
    .catch(undefined),
  tracked: z.stringbool().catch(false),
});
