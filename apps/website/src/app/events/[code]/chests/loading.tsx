import PaginationSkeleton from "@/components/skeletons/pagination-skeleton";
import TableSkeleton from "@/components/skeletons/table-skeleton";
import ToolbarSkeleton from "@/components/skeletons/toolbar-skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <Card className="shadow-md">
      <CardContent className="flex flex-col gap-4">
        <ToolbarSkeleton />
        <TableSkeleton />
        <PaginationSkeleton />
      </CardContent>
    </Card>
  );
}
