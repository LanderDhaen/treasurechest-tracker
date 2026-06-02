"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { RELEASE_YEAR } from "@/constants/event";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { useState } from "react";

export default function DashboardYearFilter() {
  const [open, setOpen] = useState(false);
  const [{ year }, setDashboardFilters] = useDashboardFilters();

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - RELEASE_YEAR + 1 },
    (_, i) => currentYear - i,
  );

  return (
    <Select
      onValueChange={(value) =>
        setDashboardFilters({ year: parseInt(value, 10) })
      }
      value={year?.toString() || ""}
      open={open}
      onOpenChange={setOpen}
    >
      <SelectTrigger className="w-40 bg-white shadow-md">
        <SelectValue placeholder="Filter by year" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel>Filter by year</SelectLabel>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
        {year && (
          <>
            <SelectSeparator />
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={() => {
                setDashboardFilters({ year: null });
                setOpen(false);
              }}
            >
              <X /> Clear filter
            </Button>
          </>
        )}
      </SelectContent>
    </Select>
  );
}
