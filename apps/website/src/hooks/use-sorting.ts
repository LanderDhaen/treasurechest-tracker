import { DEFAULT_PAGE } from "@/constants/common";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useSorting(
  defaultSort: string,
  defaultDirection: "asc" | "desc",
) {
  return useQueryStates(
    {
      sortBy: parseAsString.withDefault(defaultSort),
      direction: parseAsString.withDefault(defaultDirection),
      page: parseAsInteger.withDefault(DEFAULT_PAGE),
    },
    {
      shallow: false,
    },
  );
}
