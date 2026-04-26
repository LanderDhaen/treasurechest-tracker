import DashboardResetFiltersButtonSkeleton from "@/components/skeletons/dashboard-reset-filters-button-skeleton";
import DashboardSkeleton from "@/components/skeletons/dashboard-skeleton";
import DashboardTrackedFilterSkeleton from "@/components/skeletons/dashboard-tracked-filter-skeleton";
import EventInformationItemSkeleton from "@/components/skeletons/event-information-item-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <EventInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
        <DashboardTrackedFilterSkeleton />
        <DashboardResetFiltersButtonSkeleton />
      </div>
      <DashboardSkeleton />
    </div>
  );
}
