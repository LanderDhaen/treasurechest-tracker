import Dashboard from "@/components/dashboard";
import DashboardFilters from "@/components/dashboard-filters";
import { Separator } from "@/components/ui/separator";
import { dashboardFiltersSchema } from "@/schemas/common";
import { FilterConfig } from "@/types/common";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = dashboardFiltersSchema.parse(rawParams);
  const { untracked } = parsedParams;

  const filters = {
    excludeUntrackedAccounts: untracked,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <Separator />
      <DashboardFilters excludeUntrackedAccounts={untracked} />
      <Dashboard filters={filters} />
    </div>
  );
}
