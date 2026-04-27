"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardResetFiltersButton() {
  const [{ year, ongoing, townhall, tracked }, setDashboardFilters] =
    useDashboardFilters();

  const shouldDisable = !year && !ongoing && !townhall && !tracked;

  return (
    <Button
      variant="outline"
      className="bg-white shadow-md"
      onClick={() => setDashboardFilters(null)}
      disabled={shouldDisable}
    >
      <RotateCcw /> Reset
    </Button>
  );
}
