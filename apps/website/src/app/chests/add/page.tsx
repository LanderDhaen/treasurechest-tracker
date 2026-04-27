import ChestForm from "@/components/chest-form";
import { getAllTrackedAccounts } from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { getAllCategories } from "@/queries/category";
import { getAllAllowedEvents } from "@/queries/event";
import { getAllRarities } from "@/queries/rarity";
import { getHighestTownhall } from "@/queries/townhall";
import { chestFormSearchParamsSchema } from "@/schemas/chest";
import { notFound } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const rawParams = await searchParams;
  const parsedParams = chestFormSearchParamsSchema.parse(rawParams);
  const { account: accountTag, event: eventCode } = parsedParams;

  const accounts = await getAllTrackedAccounts();
  const events = await getAllAllowedEvents();
  const rarities = await getAllRarities();
  const categories = await getAllCategories();
  const townhall = await getHighestTownhall();

  const defaultValues = {
    accountTag: accountTag || accounts[0]?.tag || "",
    townhallLevel:
      accounts.find((a) => a.tag === accountTag)?.townhall ||
      accounts[0]?.townhall ||
      townhall.level,
    eventCode: eventCode || events[0]?.code || "",
    raritySlug: rarities[0]?.slug || "",
    amount: 1,
    rewardSlug: "",
    openedAt: new Date(),
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <ChestForm
          accounts={accounts}
          events={events}
          rarities={rarities}
          categories={categories}
          defaultValues={defaultValues}
          maxTownhallLevel={townhall.level}
        />
      </div>
    </div>
  );
}
