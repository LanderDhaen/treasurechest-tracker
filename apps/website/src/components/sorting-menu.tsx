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
import { useQueryState } from "nuqs";
import { usePagination } from "@/hooks/use-pagination";

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
  });

  const [direction, setDirection] = useQueryState("direction", {
    defaultValue: defaultDirection,
    shallow: false,
  });

  const [, setPagination] = usePagination();

  const isCurrentlyAscending = direction === "asc";

  return (
    <ButtonGroup>
      <Button
        onClick={() => {
          setDirection(isCurrentlyAscending ? "desc" : "asc");
          setPagination({ page: 1 });
        }}
        variant="outline"
        size="icon"
      >
        {isCurrentlyAscending ? <ArrowUpNarrowWide /> : <ArrowDownWideNarrow />}
      </Button>
      <Select
        onValueChange={(value) => {
          setSort(value);
          setPagination({ page: 1 });
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
