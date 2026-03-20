import * as z from "zod";

export const typeFormSchema = z.object({
  name: z.string().min(1, "Type name is required"),
});

export type TypeFormValues = z.infer<typeof typeFormSchema>;
