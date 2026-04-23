import { usePagination } from "./use-pagination";
import { useSearch } from "./use-search";

export function useClearSearch() {
  const [, setSearch] = useSearch();
  const [, setPagination] = usePagination();

  function handleClearSearch() {
    setSearch(null);
    setPagination({
      page: 1,
    });
  }

  return handleClearSearch;
}
