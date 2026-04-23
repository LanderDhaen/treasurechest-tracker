import { DEFAULT_PAGE } from "@/constants/common";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useSearch() {
  return useQueryStates(
    {
      search: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(DEFAULT_PAGE),
    },
    {
      shallow: false,
    },
  );
}
