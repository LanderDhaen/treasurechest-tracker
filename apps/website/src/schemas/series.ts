import * as z from "zod";

export const seriesFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  code: z
    .string()
    .min(1, "Code is required")
    .regex(/^[A-Z]+$/, "Code must contain only uppercase letters"),
});

export type SeriesFormValues = z.infer<typeof seriesFormSchema>;
