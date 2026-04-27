import AccountInformationItemSkeleton from "@/components/skeletons/account-information-item-skeleton";
import DashboardOngoingFilterSkeleton from "@/components/skeletons/dashboard-ongoing-filter-skeleton";
import DashboardResetFiltersButtonSkeleton from "@/components/skeletons/dashboard-reset-filters-button-skeleton";
import DashboardSkeleton from "@/components/skeletons/dashboard-skeleton";
import DashboardYearFilterSkeleton from "@/components/skeletons/dashboard-year-filter-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <DashboardYearFilterSkeleton />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6 hidden md:block"
          />

          <DashboardOngoingFilterSkeleton />
        </div>
        <DashboardResetFiltersButtonSkeleton />
      </div>
      <DashboardSkeleton />
    </div>
  );
}
