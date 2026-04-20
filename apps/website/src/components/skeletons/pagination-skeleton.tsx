import { Skeleton } from "@/components/ui/skeleton";

export default function PaginationSkeleton() {
  return (
    <div className="flex flex-col items-end md:flex-row md:items-center md:justify-end gap-4">
      <Skeleton className="w-52 h-9" />
      <Skeleton className="w-72 h-9" />
    </div>
  );
}
