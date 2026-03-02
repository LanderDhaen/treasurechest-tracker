import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import { getChestCountPerEvent } from "@/actions/event";
import { getTotalAccounts } from "@/actions/account";
import EventProgressTable from "./event-progress-table";

export interface EventProgressCardProps {
  filters: FilterConfig;
}

export default async function EventProgressCard({
  filters,
}: EventProgressCardProps) {
  const events = await getChestCountPerEvent(filters);

  // If accountId filter is applied, we can assume there's only 1 account. Otherwise, we need to get the total account count for the progress calculation in the table.

  const accountCount = filters.accountId ? 1 : await getTotalAccounts();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Skeleton className="aspect-video" />}>
          <EventProgressTable events={events} accountCount={accountCount} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
