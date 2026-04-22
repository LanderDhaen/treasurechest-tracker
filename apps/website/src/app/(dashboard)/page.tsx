import Dashboard from "@/components/dashboard";
import DashboardFilters from "@/components/dashboard-filters";
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
      <DashboardFilters defaultExcludeUntrackedAccounts={false} />
      <Dashboard filters={filters} />
    </div>
  );
}
