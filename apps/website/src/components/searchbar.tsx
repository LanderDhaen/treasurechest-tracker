"use client";

import { SearchSearchParams } from "@/schemas/common";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { SearchIcon } from "lucide-react";
import useQueryParams from "@/hooks/use-query-params";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ search }: SearchSearchParams) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleChange = useDebouncedCallback((input: string) => {
    if (input) {
      searchParams.set("search", input);
    } else {
      searchParams.delete("search");
    }
    searchParams.set("page", "1");
    pushUrl(searchParams);
  }, 300);

  return (
    <InputGroup>
      <InputGroupInput
        defaultValue={search}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search..."
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" variant="ghost">
          <SearchIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
