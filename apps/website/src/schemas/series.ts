import * as z from "zod";

export const seriesFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type SeriesFormValues = z.infer<typeof seriesFormSchema>;
