import { getEventByCode } from "@/actions/event";
import EventInformationItem from "@/components/event-information-item";
import { FilterConfig } from "@/types/common";
import { notFound } from "next/navigation";
import Dashboard from "@/components/dashboard";

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

  const filters = {
    eventId: event.id,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <EventInformationItem event={event} />
      <Dashboard filters={filters} hideSeriesCard />
    </div>
  );
}
