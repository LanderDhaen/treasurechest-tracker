import {
  getEventByCode,
  getEventHistory,
  getPossibleChestCount,
} from "@/queries/event";
import EventInformationItem from "@/components/event-information-item";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import AuthGuard from "@/components/auth-guard";
import EventActions from "@/components/event-actions";
import EventTabs from "@/components/event-tabs";
import {
  BadgeCheck,
  CalendarPlus,
  CalendarSync,
  Loader2,
  PackageMinus,
  PackagePlus,
  SquarePen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TimelineItem from "@/components/timeline-item";
import { formatDate } from "@/lib/utils";
import { getTotalChests } from "@/queries/chest";
import { HistoryEntry } from "@/types/common";

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const event = await getEventByCode(code);

  if (!event) {
    return notFound();
  }

  const history = await getEventHistory(event.id);
  const possibleChestCount = await getPossibleChestCount({
    eventId: event.id,
  });
  const actualChestCount = await getTotalChests({
    eventId: event.id,
  });

  const fullHistory = [
    {
      validFrom: event.updatedAt,
      validTo: new Date(),
      name: event.name,
      code: event.code,
      startDate: event.startDate,
      endDate: event.endDate,
      maxChests: event.maxChests,
      isChestCreationAllowed: event.isChestCreationAllowed,
      type: event.type,
    },
    ...history,
  ];

  const timeline: HistoryEntry[] = [];

  for (let i = 0; i < fullHistory.length - 1; i++) {
    const current = fullHistory[i];
    const prev = fullHistory[i + 1];

    if (current.endDate.getTime() !== prev.endDate.getTime()) {
      timeline.push({
        title: "End date changed",
        description: `from ${formatDate(prev.endDate)} to ${formatDate(current.endDate)}`,
        date: current.validFrom,
        icon: CalendarSync,
      });
    }

    if (current.startDate.getTime() !== prev.startDate.getTime()) {
      timeline.push({
        title: "Start date changed",
        description: `from ${formatDate(prev.startDate)} to ${formatDate(current.startDate)}`,
        date: current.validFrom,
        icon: CalendarSync,
      });
    }

    if (current.name !== prev.name) {
      timeline.push({
        title: "Name changed",
        description: `from ${prev.name} to ${current.name}`,
        date: current.validFrom,
        icon: SquarePen,
      });
    }

    if (current.maxChests !== prev.maxChests) {
      const isMore = current.maxChests > prev.maxChests;

      timeline.push({
        title: `Rewards ${isMore ? "increased" : "decreased"}`,
        description: `from ${prev.maxChests} to ${current.maxChests === 1 ? "1 chest" : `${current.maxChests} chests`}`,
        date: current.validFrom,
        icon: isMore ? PackagePlus : PackageMinus,
      });
    }
  }

  timeline.push({
    title: "Event started",
    description: `with ${possibleChestCount} possible chest${possibleChestCount > 1 ? "s" : ""}`,
    date: new Date(event.startDate.setHours(10)),
    icon: Loader2,
  });

  if (event.endDate < new Date()) {
    timeline.push({
      title: "Event ended",
      description: `with ${actualChestCount} chest${actualChestCount > 1 ? "s" : ""} opened`,
      date: new Date(event.endDate.setHours(10)),
      icon: BadgeCheck,
    });
  }

  timeline.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="flex flex-col gap-4">
      <EventInformationItem event={event} />
      <AuthGuard>
        <EventActions event={event} />
      </AuthGuard>
      <Separator />
      <EventTabs eventCode={code} />
      <Card className="shadow-md">
        <CardContent className="flex flex-col gap-2">
          {timeline.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
          <TimelineItem
            title="Event added"
            description={`with code #${event.code}`}
            date={event.createdAt}
            icon={CalendarPlus}
            isLast
          />
        </CardContent>
      </Card>
    </div>
  );
}
