"use client";

import { useSearch } from "@/hooks/use-search";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { SearchIcon, X } from "lucide-react";
import { debounce } from "nuqs";

interface SearchBarProps {
  rows: number;
}

export default function SearchBar({ rows }: SearchBarProps) {
  const [{ search }, setSearch] = useSearch();

  return (
    <InputGroup>
      <InputGroupInput
        value={search}
        onChange={(e) =>
          setSearch(
            {
              search: e.currentTarget.value,
              page: 1,
            },
            {
              limitUrlUpdates: debounce(300),
            },
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch({ search: e.currentTarget.value, page: 1 });
          }

          if (e.key === "Escape") {
            setSearch({ search: null, page: 1 });
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
          <InputGroupButton
            size="icon-xs"
            onClick={() => setSearch({ search: null, page: 1 })}
          >
            <X />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
