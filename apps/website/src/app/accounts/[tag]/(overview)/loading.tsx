import AccountInformationItemSkeleton from "@/components/skeletons/account-information-item-skeleton";
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
        <DashboardYearFilterSkeleton />
        <DashboardResetFiltersButtonSkeleton />
      </div>
      <DashboardSkeleton />
    </div>
  );
}
