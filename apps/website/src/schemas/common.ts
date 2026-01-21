import * as z from "zod";

export const paginationSearchParamsSchema = z.object({
  page: z.coerce.number().int().min(1).catch(1),
  pageSize: z.coerce.number().int().catch(10),
});

export type PaginationSearchParams = z.infer<
  typeof paginationSearchParamsSchema
>;
