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

import { RELEASE_YEAR } from "@/constants/event";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardYearFilter() {
  const [{ year }, setDashboardFilters] = useDashboardFilters();

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - RELEASE_YEAR + 1 },
    (_, i) => currentYear - i,
  );

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          onValueChange={(value) =>
            setDashboardFilters({ year: parseInt(value, 10) })
          }
          value={year?.toString() || ""}
        >
          <SelectTrigger className="w-40 bg-white shadow-md">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-md hover:bg-white"
          onClick={() => setDashboardFilters({ year: null })}
          disabled={!year}
        >
          <X />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
