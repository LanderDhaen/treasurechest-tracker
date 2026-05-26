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
  CircleFadingArrowUp,
  XCircle,
  ArrowLeftRight,
  UserRoundPlus,
} from "lucide-react";
import TimelineItem from "@/components/timeline-item";
import { HistoryEntry } from "@/types/common";

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
      clan: account.clan,
    },
    ...history,
  ];

  const timeline: HistoryEntry[] = [];

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

    if (current.townhall.id !== prev.townhall.id) {
      timeline.push({
        title: "Townhall upgraded",
        description: `from level ${prev.townhall.level} to level ${current.townhall.level}`,
        date: current.validFrom,
        icon: CircleFadingArrowUp,
      });
    }

    if (current.clan.id !== prev.clan.id) {
      timeline.push({
        title: "Clan changed",
        description: `from ${prev.clan.name} to ${current.clan.name}`,
        date: current.validFrom,
        icon: ArrowLeftRight,
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
            <TimelineItem key={index} {...item} />
          ))}
          <TimelineItem
            title="Account added"
            description={`with tag #${account.tag}`}
            date={account.createdAt}
            icon={UserRoundPlus}
            isLast
          />
        </CardContent>
      </Card>
    </div>
  );
}
