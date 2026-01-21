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

interface SortingProps {
  currentSort: string;
  sortingOptions: {
    label: string;
    value: string;
  }[];
}

export default function Sorting({ currentSort, sortingOptions }: SortingProps) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleValueChange = (value: string) => {
    searchParams.set("orderBy", value);
    searchParams.set("page", "1");

    pushUrl(searchParams);
  };

  return (
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
  );
}
