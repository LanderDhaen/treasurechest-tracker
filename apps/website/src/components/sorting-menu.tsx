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

import useQueryParams from "@/hooks/use-query-params";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import {
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
} from "lucide-react";

interface SortingProps {
  currentSort: string;
  currentDirection: "asc" | "desc";
  sortingOptions: {
    label: string;
    value: string;
  }[];
}

export default function Sorting({
  currentSort,
  currentDirection,
  sortingOptions,
}: SortingProps) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleButtonClick = () => {
    const newDirection = currentDirection === "asc" ? "desc" : "asc";
    searchParams.set("orderBy", currentSort);
    searchParams.set("orderDirection", newDirection);
    searchParams.set("page", "1");
    pushUrl(searchParams);
  };

  const handleValueChange = (value: string) => {
    searchParams.set("orderBy", value);
    searchParams.set("orderDirection", currentDirection);
    searchParams.set("page", "1");

    pushUrl(searchParams);
  };

  return (
    <ButtonGroup>
      <Button onClick={handleButtonClick} variant="outline">
        {currentDirection === "asc" ? (
          <ArrowUpNarrowWide />
        ) : (
          <ArrowDownWideNarrow />
        )}
      </Button>
      <Select onValueChange={handleValueChange} value={currentSort}>
        <SelectTrigger className="w-40">
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
