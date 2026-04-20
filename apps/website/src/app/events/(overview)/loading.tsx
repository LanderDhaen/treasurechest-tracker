import PaginationSkeleton from "@/components/skeletons/pagination-skeleton";
import TableSkeleton from "@/components/skeletons/table-skeleton";
import ToolbarSkeleton from "@/components/skeletons/toolbar-skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          <Skeleton className="w-full md:w-86 h-5" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ToolbarSkeleton />
        <TableSkeleton />
        <PaginationSkeleton />
      </CardContent>
    </Card>
  );
}
