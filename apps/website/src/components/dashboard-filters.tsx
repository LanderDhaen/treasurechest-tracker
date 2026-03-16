"use client";

import useQueryParams from "@/hooks/use-query-params";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

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
    <FieldGroup>
      <Field orientation="horizontal">
        <Checkbox
          id="untracked-accounts-checkbox"
          name="untracked-accounts-checkbox"
          checked={excludeUntrackedAccounts}
          onCheckedChange={handleExcludeUntrackedAccountsChange}
        />
        <FieldLabel htmlFor="untracked-accounts-checkbox">
          Only show tracked accounts
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}
