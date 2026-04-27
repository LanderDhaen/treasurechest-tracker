"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";

export default function DashboardOngoingFilter() {
  const [{ ongoing }, setDashboardFilters] = useDashboardFilters();

  return (
    <div className="flex items-center md:justify-end gap-2">
      <Switch
        id="ongoing-events"
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-zinc-300 shadow-md"
        checked={ongoing}
        onCheckedChange={(checked) => setDashboardFilters({ ongoing: checked })}
      />
      <Label htmlFor="ongoing-events" className="text-sm text-muted-foreground">
        Ongoing events only
      </Label>
    </div>
  );
}
