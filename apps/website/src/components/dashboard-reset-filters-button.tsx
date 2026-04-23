"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardResetFiltersButton() {
  const [{ year, tracked }, setDashboardFilters] = useDashboardFilters();

  return (
    <Button
      variant="outline"
      className="bg-white shadow-md"
      onClick={() => setDashboardFilters(null)}
      disabled={!year && !tracked}
    >
      <RotateCcw /> Reset
    </Button>
  );
}
