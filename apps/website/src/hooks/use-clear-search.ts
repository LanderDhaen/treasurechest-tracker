import { useSearch } from "./use-search";

export function useClearSearch() {
  const [, setSearch] = useSearch();

  function handleClearSearch() {
    setSearch({
      search: null,
      page: 1,
    });
  }

  return handleClearSearch;
}
