import { Badge } from "@/components/ui/badge";
import { EventStatus } from "@/constants/event";
import { colorEventStatus } from "@/lib/event";

export default function StatusBadge({ status }: { status: EventStatus }) {
  return <Badge className={colorEventStatus(status)}>{status}</Badge>;
}
