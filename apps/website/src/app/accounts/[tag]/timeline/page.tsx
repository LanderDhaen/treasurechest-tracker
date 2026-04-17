import { getAccountByTag, getAccountHistory } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { notFound } from "next/navigation";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import AccountTabs from "@/components/account-tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  LoaderCircle,
  SquarePen,
  LucideIcon,
  CircleFadingArrowUp,
  XCircle,
} from "lucide-react";
import { formatDateTime } from "@/lib/utils";

type TimelineItem = {
  title: string;
  description: string;
  date: Date;
  icon: LucideIcon;
};

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);

  if (!account) {
    return notFound();
  }

  const history = await getAccountHistory(account.id);

  const fullHistory = [
    {
      validFrom: account.updatedAt,
      validTo: new Date(),
      name: account.name,
      tag: account.tag,
      isTracked: account.isTracked,
      townhall: account.townhall,
    },
    ...history,
  ];

  const timeline: TimelineItem[] = [];

  for (let i = 0; i < fullHistory.length - 1; i++) {
    const current = fullHistory[i];
    const prev = fullHistory[i + 1];

    if (current.isTracked !== prev.isTracked) {
      timeline.push({
        title: "Tracking changed",
        description: `from ${prev.isTracked ? "tracked" : "untracked"} to ${current.isTracked ? "tracked" : "untracked"}`,
        date: current.validFrom,
        icon: current.isTracked ? LoaderCircle : XCircle,
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

    if (current.townhall !== prev.townhall) {
      timeline.push({
        title: "Townhall changed",
        description: `from level ${prev.townhall} to level ${current.townhall}`,
        date: current.validFrom,
        icon: CircleFadingArrowUp,
      });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItem account={account} />
      <AuthGuard>
        <AccountActions account={account} />
      </AuthGuard>
      <Separator />
      <AccountTabs accountTag={account.tag} />
      <Card className="shadow-md">
        <CardContent className="flex flex-col gap-2">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[24px_1fr] md:grid-cols-[150px_24px_1fr] gap-x-4"
            >
              <div className="hidden md:text-muted-foreground md:italic md:block md:text-sm md:text-right">
                {formatDateTime(new Date(item.date))}
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-5 place-items-center">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <span className="h-12 w-px bg-black" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm italic text-muted-foreground md:hidden">
                  {formatDateTime(new Date(item.date))}
                </div>
                <div className="text-sm">{item.title}</div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
