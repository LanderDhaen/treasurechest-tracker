"use client";

import useQueryParams from "@/hooks/use-query-params";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export default function DashboardFilters({
  excludeUntrackedAccounts,
}: {
  excludeUntrackedAccounts: boolean;
}) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleExcludeUntrackedAccountsChange = (
    checked: boolean | "indeterminate",
  ) => {
    searchParams.set("untracked", String(checked));
    pushUrl(searchParams);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <Label
        htmlFor="untracked-accounts"
        className="text-sm text-muted-foreground"
      >
        Exclude untracked accounts
      </Label>
      <Switch
        id="untracked-accounts"
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        checked={excludeUntrackedAccounts}
        onCheckedChange={handleExcludeUntrackedAccountsChange}
      />
    </div>
  );
}
