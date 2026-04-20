import { Skeleton } from "../ui/skeleton";

export default function EventInformationItemSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-7 w-80" />
      <Skeleton className="h-5.25 w-12" />
      <Skeleton className="h-5 w-60" />
    </div>
  );
}
