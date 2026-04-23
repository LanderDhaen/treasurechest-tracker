import Dashboard from "@/components/dashboard";
import DashboardTrackedFilter from "@/components/dashboard-tracked-filter";
import DashboardYearFilter from "@/components/dashboard-year-filter";
import { dashboardFiltersSchema } from "@/schemas/common";
import { FilterConfig } from "@/types/common";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = dashboardFiltersSchema.parse(rawParams);
  const { year, tracked } = parsedParams;

  const filters = {
    onlyTracked: tracked,
    year: year,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <DashboardYearFilter />
        <DashboardTrackedFilter defaultOnlyTracked={false} />
      </div>
      <Dashboard filters={filters} />
    </div>
  );
}
