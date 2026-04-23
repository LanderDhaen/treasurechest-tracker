"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardResetFiltersButton() {
  const [, setDashboardFilters] = useDashboardFilters();

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
