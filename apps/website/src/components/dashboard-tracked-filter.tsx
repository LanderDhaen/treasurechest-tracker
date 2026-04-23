"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { parseAsBoolean, useQueryState } from "nuqs";

export default function DashboardTrackedFilter({
  defaultOnlyTracked,
}: {
  defaultOnlyTracked: boolean;
}) {
  const [onlyTracked, setOnlyTracked] = useQueryState(
    "tracked",
    parseAsBoolean.withDefault(defaultOnlyTracked).withOptions({
      shallow: false,
    }),
  );

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
        checked={onlyTracked}
        onCheckedChange={setOnlyTracked}
      />
    </div>
  );
}
