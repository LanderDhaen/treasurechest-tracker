import DashboardFiltersSkeleton from "@/components/skeletons/dashboard-filters-skeleton";
import DashboardSkeleton from "@/components/skeletons/dashboard-skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardFiltersSkeleton />
      <DashboardSkeleton />
    </div>
  );
}
