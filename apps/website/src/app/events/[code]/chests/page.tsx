import { getEventByCode } from "@/queries/event";
import EventInformationItem from "@/components/event-information-item";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import AuthGuard from "@/components/auth-guard";
import EventActions from "@/components/event-actions";
import EventTabs from "@/components/event-tabs";
import { getAllChests } from "@/queries/chest";
import { Card, CardContent } from "@/components/ui/card";
import ChestTable from "@/components/chest-table";

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

  const { chests } = await getAllChests({
    search: undefined,
    page: 1,
    pageSize: 10,
    sortBy: "openedAt",
    direction: "desc",
  });

  return (
    <div className="flex flex-col gap-4">
      <EventInformationItem event={event} />
      <AuthGuard>
        <EventActions event={event} />
      </AuthGuard>
      <Separator />
      <EventTabs eventCode={code} />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <ChestTable chests={chests} />
        </CardContent>
      </Card>
    </div>
  );
}
