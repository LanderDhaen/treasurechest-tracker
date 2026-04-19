import { getEventByCode, getEventHistory } from "@/queries/event";
import EventInformationItem from "@/components/event-information-item";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import AuthGuard from "@/components/auth-guard";
import EventActions from "@/components/event-actions";
import EventTabs from "@/components/event-tabs";
import {
  BadgeCheck,
  CalendarCheck2,
  CalendarSync,
  CalendarX2,
  Loader2,
  LucideIcon,
  Power,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TimelineItem from "@/components/timeline-item";
import { formatDate } from "@/lib/utils";
import { EventStatus } from "@/constants/event";

export interface TimelineItem {
  title: string;
  description: string;
  date: Date;
  icon: LucideIcon;
}

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

  const fullHistory = [
    {
      validFrom: event.updatedAt,
      validTo: new Date(),
      edition: event.edition,
      code: event.code,
      startDate: event.startDate,
      endDate: event.endDate,
      maxChests: event.maxChests,
      isChestCreationAllowed: event.isChestCreationAllowed,
      type: {
        name: event.type,
      },
      series: {
        name: event.name,
      },
    },
    ...history,
  ];

  const timeline: TimelineItem[] = [];

  for (let i = 0; i < fullHistory.length - 1; i++) {
    const current = fullHistory[i];
    const prev = fullHistory[i + 1];

    if (current.startDate.getTime() !== prev.startDate.getTime()) {
      timeline.push({
        title: "Start date changed",
        description: `from ${formatDate(prev.startDate)} to ${formatDate(current.startDate)}`,
        date: current.validFrom,
        icon: CalendarSync,
      });
    }

    if (current.endDate.getTime() !== prev.endDate.getTime()) {
      timeline.push({
        title: "End date changed",
        description: `from ${formatDate(prev.endDate)} to ${formatDate(current.endDate)}`,
        date: current.validFrom,
        icon: CalendarSync,
      });
    }
  }

  timeline.push({
    title: "Status changed",
    description: `from ${EventStatus.Upcoming.toLowerCase()} to ${EventStatus.Ongoing.toLowerCase()}`,
    date: event.startDate,
    icon: Loader2,
  });

  if (event.endDate < new Date()) {
    timeline.push({
      title: "Status changed",
      description: `from ${EventStatus.Ongoing.toLowerCase()} to ${EventStatus.Finished.toLowerCase()}`,
      date: event.endDate,
      icon: Loader2,
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
            title="Event created"
            description={`with code #${event.code}`}
            date={event.createdAt}
            icon={Power}
            isLast
          />
        </CardContent>
      </Card>
    </div>
  );
}
