import { Badge } from "@/components/ui/badge";
import { EventStatus } from "@/constants/event";
import { CalendarPlus, CheckCircle2 } from "lucide-react";
import { Spinner } from "./ui/spinner";

export default function EventStatusBadge({ status }: { status: EventStatus }) {
  switch (status) {
    case EventStatus.Finished:
      return (
        <Badge className="bg-red-50 text-red-600">
          <CheckCircle2 />
          {status}
        </Badge>
      );
    case EventStatus.Upcoming:
      return (
        <Badge className="bg-orange-50 text-orange-600">
          <CalendarPlus />
          {status}
        </Badge>
      );
    case EventStatus.Ongoing:
      return (
        <Badge className="bg-green-50 text-green-600">
          <Spinner />
          {status}
        </Badge>
      );
  }
}
