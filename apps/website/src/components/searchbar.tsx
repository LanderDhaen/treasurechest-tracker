"use client";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon } from "lucide-react";
import useQueryParams from "@/hooks/use-query-params";
import { useDebouncedCallback } from "use-debounce";

interface SearchBarProps {
  currentSearch: string | undefined;
}

export default function SearchBar({ currentSearch }: SearchBarProps) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleChange = useDebouncedCallback((search: string) => {
    if (search) {
      searchParams.set("search", search);
    } else {
      searchParams.delete("search");
    }
    searchParams.set("page", "1");
    pushUrl(searchParams);
  }, 300);

  return (
    <InputGroup>
      <InputGroupInput
        defaultValue={currentSearch}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search..."
      />
      <InputGroupAddon align="inline-start">
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
