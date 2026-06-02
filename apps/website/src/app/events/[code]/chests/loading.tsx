import EventInformationItemSkeleton from "@/components/skeletons/event-information-item-skeleton";
import PaginationSkeleton from "@/components/skeletons/pagination-skeleton";
import TableSkeleton from "@/components/skeletons/table-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import ToolbarSkeleton from "@/components/skeletons/toolbar-skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <EventInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <Card className="shadow-md">
        <CardContent className="flex flex-col gap-4">
          <ToolbarSkeleton />
          <TableSkeleton />
          <PaginationSkeleton />
        </CardContent>
      </Card>
    </div>
  );
}
