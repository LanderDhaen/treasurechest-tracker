import EventInformationItemSkeleton from "@/components/skeletons/event-information-item-skeleton";
import TabsSkeleton from "@/components/skeletons/tabs-skeleton";
import TimelineSkeleton from "@/components/skeletons/timeline-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <EventInformationItemSkeleton />
      <Separator />
      <TabsSkeleton />
      <TimelineSkeleton />
    </div>
  );
}
