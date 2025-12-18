import { Badge } from "@/components/ui/badge";
import { EventStatus } from "@/types/event-status";

export default function StatusBadge({ status }: { status: EventStatus }) {
  const colorStatus = (status: EventStatus) => {
    switch (status) {
      case EventStatus.Ongoing:
        return "bg-green-50 text-green-600";
      case EventStatus.Finished:
        return "bg-red-50 text-red-600";
      case EventStatus.Upcoming:
        return "bg-orange-50 text-orange-500";
      default:
        return "bg-orange-50 text-orange-500";
    }
  };

  return <Badge className={colorStatus(status)}>{status}</Badge>;
}
