import Dashboard from "@/components/dashboard";
import DashboardResetFiltersButton from "@/components/dashboard-reset-filters-button";
import DashboardTrackedFilter from "@/components/dashboard-tracked-filter";
import DashboardYearFilter from "@/components/dashboard-year-filter";
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
  const { year, tracked } = parsedParams;

  const filters = {
    onlyTracked: tracked,
    year: year,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <DashboardYearFilter />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6 hidden md:block"
          />
          <DashboardTrackedFilter />
        </div>
        <DashboardResetFiltersButton />
      </div>
      <Dashboard filters={filters} />
    </div>
  );
}
