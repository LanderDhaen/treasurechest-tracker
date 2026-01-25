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

export default function SearchBar({ search }: SearchSearchParams) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleChange = (input: string) => {
    if (input) {
      searchParams.set("search", input);
    } else {
      searchParams.delete("search");
    }
    searchParams.set("page", "1");
    pushUrl(searchParams);
  };

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
