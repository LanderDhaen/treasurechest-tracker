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
  const { year, tracked, ongoing } = parsedParams;

  const filters = {
    onlyTracked: tracked,
    onlyOngoing: ongoing,
    year: year,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <DashboardFilters />
      <Dashboard filters={filters} />
    </div>
  );
}
