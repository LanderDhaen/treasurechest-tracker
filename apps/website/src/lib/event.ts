import { EventStatus } from "@/constants/event";

export function colorEventStatus(status: EventStatus) {
  switch (status) {
    case EventStatus.Finished:
      return "bg-red-50 text-red-600";
    case EventStatus.Upcoming:
      return "bg-orange-50 text-orange-600";
    case EventStatus.Ongoing:
      return "bg-green-50 text-green-600";
    default:
      return "bg-gray-50 text-gray-600";
  }
}
