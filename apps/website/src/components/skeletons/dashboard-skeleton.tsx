import { Skeleton } from "../ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Skeleton className="h-54.5 rounded-xl" />
        <Skeleton className="h-54.5 rounded-xl" />
        <Skeleton className="h-54.5 rounded-xl" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-109 rounded-xl" />
        <Skeleton className="h-109 rounded-xl" />
      </div>
      <Skeleton className="h-404 rounded-xl" />
    </div>
  );
}
