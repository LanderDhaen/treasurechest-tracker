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
import { formatEventName } from "@/lib/event";

interface EventInformationItemProps {
  event: {
    id: number;
    code: string;
    edition: number;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    series: {
      name: string;
      isGift: boolean;
    };
  };
}

export default function EventInformationItem({
  event,
}: EventInformationItemProps) {
  return (
    <Item className="p-0">
      <ItemContent>
        <ItemTitle className="text-xl font-bold">
          {formatEventName(event.series.name, event.edition)}
        </ItemTitle>
        <ItemDescription className="flex gap-2 items-center">
          <span className="italic">#{event.code}</span>
          <StatusBadge status={event.status} />
          <GiftBadge isGift={event.series.isGift} />
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
