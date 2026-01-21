import * as z from "zod";

export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).catch(1),
  pageSize: z.coerce.number().int().catch(10),
});

export type Pagination = z.infer<typeof PaginationSchema>;
