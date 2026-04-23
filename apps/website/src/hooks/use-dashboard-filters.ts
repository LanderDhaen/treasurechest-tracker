import { DEFAULT_ONLY_TRACKED } from "@/constants/dashboard";
import { parseAsBoolean, parseAsInteger, useQueryStates } from "nuqs";

export function useDashboardFilters() {
  return useQueryStates(
    {
      year: parseAsInteger,
      tracked: parseAsBoolean.withDefault(DEFAULT_ONLY_TRACKED),
    },
    {
      shallow: false,
    },
  );
}
