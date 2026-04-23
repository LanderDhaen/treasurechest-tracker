import * as z from "zod";
import { paginationSchema, searchSchema } from "./common";
import {
  DEFAULT_EVENT_SORT_OPTION,
  DEFAULT_EVENT_SORT_DIRECTION,
} from "@/constants/event";

export const eventSearchParamsSchema = z.object({
  ...searchSchema.shape,
  ...paginationSchema.shape,
  sortBy: z
    .enum([
      "code",
      "status",
      "type",
      "name",
      "startDate",
      "endDate",
      "maxChests",
    ])
    .catch(DEFAULT_EVENT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_EVENT_SORT_DIRECTION),
});

export type EventSearchParams = z.infer<typeof eventSearchParamsSchema>;

export const eventFormSchema = z.object({
  dateRange: z.object({
    from: z.date("Start date is required"),
    to: z.date("End date is required"),
  }),
  maxChests: z.int("Max chests must be an integer"),
  typeSlug: z.string().min(1, "Type is required"),
  seriesCode: z.string().min(1, "Series is required"),
});

export type EventFormValues = z.infer<typeof eventFormSchema>;

export const eventFormSearchParamsSchema = z.object({
  series: z.string().optional(),
  type: z.string().optional(),
  returnTo: z.enum(["/events", "/chests/add"]).catch("/events"),
});

export type EventFormSearchParams = z.infer<typeof eventFormSearchParamsSchema>;
