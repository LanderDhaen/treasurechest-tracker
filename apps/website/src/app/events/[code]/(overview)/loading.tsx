import DashboardFiltersSkeleton from "@/components/skeletons/dashboard-filters-skeleton";
import DashboardSkeleton from "@/components/skeletons/dashboard-skeleton";
import EventInformationItemSkeleton from "@/components/skeletons/event-information-item-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <EventInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <DashboardFiltersSkeleton hideEventFiltersSkeleton />
      <DashboardSkeleton />
    </div>
  );
}
