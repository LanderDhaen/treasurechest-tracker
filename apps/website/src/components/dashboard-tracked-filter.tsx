"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardTrackedFilter() {
  const [{ tracked }, setDashboardFilters] = useDashboardFilters();

  return (
    <div className="flex items-center md:justify-end gap-2">
      <Switch
        id="tracked-accounts"
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-zinc-300 shadow-md"
        checked={tracked}
        onCheckedChange={(checked) => setDashboardFilters({ tracked: checked })}
      />
      <Label
        htmlFor="tracked-accounts"
        className="text-sm text-muted-foreground"
      >
        Tracked accounts only
      </Label>
    </div>
  );
}
