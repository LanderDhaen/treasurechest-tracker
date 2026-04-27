import { Skeleton } from "../ui/skeleton";

export default function DashboardOngoingFilterSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="w-8 h-5" />
      <Skeleton className="w-47 h-5" />
    </div>
  );
}
