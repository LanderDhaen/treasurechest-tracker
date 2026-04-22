"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { parseAsBoolean, useQueryState } from "nuqs";

export default function DashboardFilters({
  defaultExcludeUntrackedAccounts,
}: {
  defaultExcludeUntrackedAccounts: boolean;
}) {
  const [exludeUntracked, setExcludeUntracked] = useQueryState(
    "untracked",
    parseAsBoolean.withDefault(defaultExcludeUntrackedAccounts).withOptions({
      shallow: false,
    }),
  );

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
        checked={exludeUntracked}
        onCheckedChange={setExcludeUntracked}
      />
    </div>
  );
}
