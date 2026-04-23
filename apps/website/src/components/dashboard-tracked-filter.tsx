"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardTrackedFilter() {
  const [{ tracked }, setDashboardFilters] = useDashboardFilters();

  return (
    <div className="flex items-center justify-end gap-2">
      <Label
        htmlFor="tracked-accounts"
        className="text-sm text-muted-foreground"
      >
        Only show tracked accounts
      </Label>
      <Switch
        id="tracked-accounts"
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        checked={tracked}
        onCheckedChange={(checked) => setDashboardFilters({ tracked: checked })}
      />
    </div>
  );
}
