import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants/common";
import * as z from "zod";

export const paginationSearchParamsSchema = z.object({
  page: z.coerce.number().int().min(1).catch(DEFAULT_PAGE),
  pageSize: z.coerce.number().int().catch(DEFAULT_PAGE_SIZE),
});

export type PaginationSearchParams = z.infer<
  typeof paginationSearchParamsSchema
>;
