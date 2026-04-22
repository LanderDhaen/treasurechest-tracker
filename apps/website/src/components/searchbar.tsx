"use client";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon } from "lucide-react";
import { debounce, useQueryState } from "nuqs";

interface SearchBarProps {
  rows: number;
}

export default function SearchBar({ rows }: SearchBarProps) {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
    shallow: false,
  });

  return (
    <InputGroup>
      <InputGroupInput
        value={search}
        onChange={(e) =>
          setSearch(e.target.value, {
            limitUrlUpdates: debounce(300),
          })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch(e.currentTarget.value);
          }

          if (e.key === "Escape") {
            setSearch(null);
          }
        }}
        placeholder="Search..."
      />
      <InputGroupAddon align="inline-start">
        <SearchIcon />
      </InputGroupAddon>
      {search && (
        <InputGroupAddon align="inline-end">
          {rows} result{rows !== 1 ? "s" : ""}
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
