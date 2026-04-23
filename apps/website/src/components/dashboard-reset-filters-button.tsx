"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export default function DashboardResetFiltersButton() {
  const [, setDashboardFilters] = useQueryStates(
    {
      year: parseAsInteger,
      tracked: parseAsString,
    },
    { shallow: false },
  );

  return (
    <Button
      variant="outline"
      className="bg-white shadow-md"
      size="sm"
      onClick={() => setDashboardFilters(null)}
    >
      <RotateCcw /> Reset
    </Button>
  );
}
