import { parseAsInteger, useQueryStates } from "nuqs";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants/common";

export function usePagination() {
  return useQueryStates({
    page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({
      shallow: false,
    }),
    pageSize: parseAsInteger.withDefault(DEFAULT_PAGE_SIZE).withOptions({
      shallow: false,
    }),
  });
}
