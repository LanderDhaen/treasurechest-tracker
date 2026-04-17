import { getAccountByTag } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { notFound } from "next/navigation";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import AccountTabs from "@/components/account-tabs";
import { Card, CardContent } from "@/components/ui/card";
import { LoaderCircle, CircleFadingArrowUp, SquarePen } from "lucide-react";
import { formatDateTime } from "@/lib/utils";

const TIMELINE = [
  {
    id: 1,
    date: "1 Oct 2026",
    title: "Townhall upgraded",
    icon: CircleFadingArrowUp,
    description: "from 17 to 18",
  },
  {
    id: 2,
    date: "15 Oct 2026",
    title: "Status changed",
    icon: LoaderCircle,
    description: "from untracked to tracked",
  },
  {
    id: 3,
    date: "20 Oct 2026",
    title: "Name changed",
    icon: SquarePen,
    description: "from Lander to DL✨Lander",
  },
];

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
          {TIMELINE.map((item) => (
            <div
              key={item.id}
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
