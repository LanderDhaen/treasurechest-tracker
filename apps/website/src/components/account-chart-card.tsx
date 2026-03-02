import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import { FilterConfig } from "@/types/common";
import { getChestCountPerAccount } from "@/actions/account";
import AccountChart from "./account-chart";

interface AccountChartCardProps {
  filters: FilterConfig;
}

export default async function AccountChartCard({
  filters,
}: AccountChartCardProps) {
  const accounts = await getChestCountPerAccount(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Skeleton className="aspect-video" />}>
          <AccountChart accounts={accounts} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
