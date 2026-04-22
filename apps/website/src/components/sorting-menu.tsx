"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";

interface SortingMenuProps {
  defaultSort: string;
  defaultDirection: "asc" | "desc";
  sortingOptions: {
    label: string;
    value: string;
  }[];
}

export default function SortingMenu({
  defaultSort,
  defaultDirection,
  sortingOptions,
}: SortingMenuProps) {
  const [sort, setSort] = useQueryState("sortBy", {
    defaultValue: defaultSort,
    shallow: false,
    clearOnDefault: false,
  });

  const [direction, setDirection] = useQueryState("direction", {
    defaultValue: defaultDirection,
    shallow: false,
    clearOnDefault: false,
  });

  const [, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withDefault(1)
      .withOptions({ shallow: false, clearOnDefault: false }),
  );

  const isCurrentlyAscending = direction === "asc";

  return (
    <ButtonGroup>
      <Button
        onClick={() => {
          setDirection(isCurrentlyAscending ? "desc" : "asc");
          setPage(1);
        }}
        variant="outline"
        size="icon"
      >
        {isCurrentlyAscending ? <ArrowUpNarrowWide /> : <ArrowDownWideNarrow />}
      </Button>
      <Select
        onValueChange={(value) => {
          setSort(value);
          setPage(1);
        }}
        value={sort}
      >
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            {sortingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </ButtonGroup>
  );
}
