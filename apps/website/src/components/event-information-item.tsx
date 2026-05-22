import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import StatusBadge from "./event-status-badge";
import { formatDate } from "@/lib/utils";
import { EventStatus } from "@/constants/event";
import { formatEventName } from "@/lib/event";
import EventTypeBadge from "./event-type-badge";

interface EventInformationItemProps {
  event: {
    id: number;
    code: string;
    name: string | null;
    edition: number;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    type: string;
    series: string;
  };
}

export default function EventInformationItem({
  event,
}: EventInformationItemProps) {
  return (
    <Item className="p-0">
      <ItemContent>
        <ItemTitle className="text-xl font-bold items-center">
          {formatEventName(event.name, event.edition, event.series)}
          <StatusBadge status={event.status} />
          <EventTypeBadge type={event.type} />
        </ItemTitle>
        <ItemDescription className="italic">#{event.code}</ItemDescription>

        <ItemDescription className="text-sm text-muted-foreground">
          {event.maxChests == 1 ? "1 Chest" : `${event.maxChests} Chests`}・
          {formatDate(event.startDate)} - {formatDate(event.endDate)}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
