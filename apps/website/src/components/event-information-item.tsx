import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import StatusBadge from "./status-badge";
import GiftBadge from "./gift-badge";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { EventStatus } from "@/constants/event";

interface EventInformationItemProps {
  event: {
    name: string;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    isGift: boolean;
  };
}

export default function EventInformationItem({
  event,
}: EventInformationItemProps) {
  return (
    <Item className="p-0">
      <ItemContent>
        <ItemTitle className="text-xl font-bold">{event.name}</ItemTitle>
        <ItemDescription className="flex gap-2">
          <StatusBadge status={event.status} />
          <GiftBadge isGift={event.isGift} />
          <Badge variant="secondary">
            {event.maxChests == 1 ? "1 Chest" : `${event.maxChests} Chests`}
          </Badge>
        </ItemDescription>

        <ItemDescription className="text-sm text-muted-foreground">
          {formatDate(event.startDate)} - {formatDate(event.endDate)}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
