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
import { useSorting } from "@/hooks/use-sorting";

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
  const [{ sortBy, direction }, setSorting] = useSorting(
    defaultSort,
    defaultDirection,
  );

  const isCurrentlyAscending = direction === "asc";
  const nextDirection = isCurrentlyAscending ? "desc" : "asc";

  return (
    <ButtonGroup>
      <Button
        onClick={() =>
          setSorting({
            direction: nextDirection,
            page: 1,
          })
        }
        variant="outline"
        size="icon"
      >
        {isCurrentlyAscending ? <ArrowUpNarrowWide /> : <ArrowDownWideNarrow />}
      </Button>
      <Select
        onValueChange={(value) => setSorting({ sortBy: value, page: 1 })}
        value={sortBy}
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
