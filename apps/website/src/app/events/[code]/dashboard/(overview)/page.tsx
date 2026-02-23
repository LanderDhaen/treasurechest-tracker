import { getTotalAccounts } from "@/actions/account";
import { getTotalChests } from "@/actions/chest";
import { getEventByCode } from "@/actions/event";
import TotalChestCard from "@/components/total-chest-card";

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const event = await getEventByCode(code);

  if (!event) {
    return <div>Event not found</div>;
  }

  const chestCount = await getTotalChests({
    eventId: event.id,
  });
  const accountCount = await getTotalAccounts();

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          chestCount={chestCount}
          description={`during ${event.name}・${accountCount} accounts`}
        />
      </div>
    </div>
  );
}
