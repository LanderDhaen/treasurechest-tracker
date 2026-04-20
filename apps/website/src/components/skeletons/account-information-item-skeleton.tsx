import { Skeleton } from "../ui/skeleton";

export default function AccountInformationItemSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-7 w-60" />
      <Skeleton className="h-5.25 w-24" />
      <Skeleton className="h-5 w-60" />
    </div>
  );
}
