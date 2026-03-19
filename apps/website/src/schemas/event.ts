import * as z from "zod";
import { paginationSchema, searchSchema } from "./common";
import { DEFAULT_SORT_DIRECTION, DEFAULT_SORT_OPTION } from "@/constants/event";

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
    .catch(DEFAULT_SORT_OPTION),
  direction: z.enum(["asc", "desc"]).catch(DEFAULT_SORT_DIRECTION),
});

export type EventSearchParams = z.infer<typeof eventSearchParamsSchema>;

// TODO: Improve validation

export const eventFormSchema = z.object({
  dateRange: z.object({
    from: z.date("Start date is required"),
    to: z.date("End date is required"),
  }),
  maxChests: z.int("Max chests must be an integer"),
  typeName: z.string().min(1, "Type is required"),
  seriesCode: z.string().min(1, "Series is required"),
});

export type EventFormValues = z.infer<typeof eventFormSchema>;
