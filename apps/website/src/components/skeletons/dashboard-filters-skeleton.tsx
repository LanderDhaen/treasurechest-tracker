import DashboardFilterSeparator from "../dashboard-filter-separator";
import { Skeleton } from "../ui/skeleton";

interface DashboardFiltersProps {
  hideAccountFiltersSkeleton?: boolean;
  hideEventFiltersSkeleton?: boolean;
}

export default function DashboardFiltersSkeleton({
  hideAccountFiltersSkeleton = false,
  hideEventFiltersSkeleton = false,
}: DashboardFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {!hideEventFiltersSkeleton && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="w-25 h-9" />
              <Skeleton className="w-9 h-9" />
            </div>
            <DashboardFilterSeparator />
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-5" />
              <Skeleton className="w-36.5 h-5" />
            </div>
          </div>
        )}
        {!hideAccountFiltersSkeleton && !hideEventFiltersSkeleton && (
          <DashboardFilterSeparator />
        )}
        {!hideAccountFiltersSkeleton && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="w-30 h-9" />
            </div>
            <DashboardFilterSeparator />
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-5" />
              <Skeleton className="w-39 h-5" />
            </div>
          </div>
        )}
      </div>
      <Skeleton className="w-22.5 h-9" />
    </div>
  );
}
