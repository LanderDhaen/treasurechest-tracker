"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { parseAsNumberLiteral, useQueryState } from "nuqs";

import { RELEASE_YEAR } from "@/constants/event";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: CURRENT_YEAR - RELEASE_YEAR + 1 },
  (_, i) => CURRENT_YEAR - i,
);

export default function DashboardYearFilter() {
  const [selectedYear, setSelectedYear] = useQueryState(
    "year",
    parseAsNumberLiteral(YEARS).withOptions({ shallow: false }),
  );

  return (
    <ButtonGroup>
      <Select
        onValueChange={(value) => setSelectedYear(parseInt(value, 10))}
        value={selectedYear?.toString() || ""}
      >
        <SelectTrigger className="w-40 bg-white">
          <SelectValue placeholder="Filter by year" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Year</SelectLabel>
            {YEARS.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        size="icon"
        className="bg-white hover:bg-white"
        onClick={() => setSelectedYear(null)}
        disabled={!selectedYear}
      >
        <X />
      </Button>
    </ButtonGroup>
  );
}
