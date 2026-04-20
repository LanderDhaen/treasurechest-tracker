import EventInformationItemSkeleton from "@/components/skeletons/event-information-item-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <EventInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <Card>
        <CardContent className="h-100 flex gap-2 justify-center items-center">
          <Spinner />
          <span className="italic text-muted-foreground">
            Loading timeline...
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
