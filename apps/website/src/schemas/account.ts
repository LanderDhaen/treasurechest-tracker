import * as z from "zod";

export const accountSearchParamsSchema = z.object({
  page: z.coerce.number().int().min(1).catch(1),
  pageSize: z.coerce.number().int().catch(10),
  sortBy: z.enum(["townhall", "name", "clan"]).catch("name"),
  direction: z.enum(["asc", "desc"]).catch("asc"),
});

export type AccountSearchParams = z.infer<typeof accountSearchParamsSchema>;
