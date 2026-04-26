import DashboardResetFiltersButtonSkeleton from "@/components/skeletons/dashboard-reset-filters-button-skeleton";
import DashboardSkeleton from "@/components/skeletons/dashboard-skeleton";
import DashboardTrackedFilterSkeleton from "@/components/skeletons/dashboard-tracked-filter-skeleton";
import DashboardYearFilterSkeleton from "@/components/skeletons/dashboard-year-filter-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <DashboardYearFilterSkeleton />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6 hidden md:block"
          />
          <DashboardTrackedFilterSkeleton />
        </div>
        <DashboardResetFiltersButtonSkeleton />
      </div>
      <DashboardSkeleton />
    </div>
  );
}
