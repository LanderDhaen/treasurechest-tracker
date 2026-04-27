import {
  DEFAULT_ONLY_ONGOING,
  DEFAULT_ONLY_TRACKED,
} from "@/constants/dashboard";
import { parseAsBoolean, parseAsInteger, useQueryStates } from "nuqs";

export function useDashboardFilters() {
  return useQueryStates(
    {
      year: parseAsInteger,
      ongoing: parseAsBoolean.withDefault(DEFAULT_ONLY_ONGOING),
      tracked: parseAsBoolean.withDefault(DEFAULT_ONLY_TRACKED),
    },
    {
      shallow: false,
    },
  );
}
