import { getEventByCode } from "@/queries/event";
import EventInformationItem from "@/components/event-information-item";
import { FilterConfig } from "@/types/common";
import { notFound } from "next/navigation";
import Dashboard from "@/components/dashboard";
import { dashboardFiltersSchema } from "@/schemas/common";
import DashboardFilters from "@/components/dashboard-filters";
import { Separator } from "@/components/ui/separator";
import AuthGuard from "@/components/auth-guard";
import EventActions from "@/components/event-actions";
import EventTabs from "@/components/event-tabs";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { code } = await params;

  const event = await getEventByCode(code);

  if (!event) {
    return notFound();
  }

  const rawParams = await searchParams;
  const parsedParams = dashboardFiltersSchema.parse(rawParams);
  const { untracked } = parsedParams;

  const filters = {
    excludeUntrackedAccounts: untracked,
    eventId: event.id,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <EventInformationItem event={event} />
      <AuthGuard>
        <EventActions event={event} />
      </AuthGuard>
      <Separator />
      <EventTabs eventCode={code} />
      <DashboardFilters excludeUntrackedAccounts={untracked} />
      <Dashboard filters={filters} hideEventCards />
    </div>
  );
}
