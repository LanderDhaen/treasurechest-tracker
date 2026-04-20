import { Skeleton } from "../ui/skeleton";

export default function DashboardFiltersSkeleton() {
  return (
    <div className="flex items-center justify-end gap-2">
      <Skeleton className="w-50 h-5" />
      <Skeleton className="w-8 h-5" />
    </div>
  );
}
