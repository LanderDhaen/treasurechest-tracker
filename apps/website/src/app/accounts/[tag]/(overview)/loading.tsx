import AccountInformationItemSkeleton from "@/components/skeletons/account-information-item-skeleton";
import DashboardFiltersSkeleton from "@/components/skeletons/dashboard-filters-skeleton";
import DashboardSkeleton from "@/components/skeletons/dashboard-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <DashboardFiltersSkeleton hideAccountFiltersSkeleton />
      <DashboardSkeleton />
    </div>
  );
}
