import { parseAsInteger, useQueryStates } from "nuqs";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants/common";

export function usePagination() {
  return useQueryStates(
    {
      page: parseAsInteger.withDefault(DEFAULT_PAGE),
      pageSize: parseAsInteger.withDefault(DEFAULT_PAGE_SIZE),
    },
    {
      shallow: false,
      scroll: true,
    },
  );
}
