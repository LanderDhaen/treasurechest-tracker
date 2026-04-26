import { Skeleton } from "../ui/skeleton";

export default function DashboardYearFilterSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="w-40 h-9" />
      <Skeleton className="w-9 h-9" />
    </div>
  );
}
