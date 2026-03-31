import ChestForm from "@/components/chest-form";
import { getAllTrackedAccounts } from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { getAllCategories } from "@/queries/category";
import { getAllAllowedEvents } from "@/queries/event";
import { getAllRarities } from "@/queries/rarity";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const accounts = await getAllTrackedAccounts();
  const events = await getAllAllowedEvents();
  const rarities = await getAllRarities();
  const categories = await getAllCategories();

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <ChestForm
          accounts={accounts}
          events={events}
          rarities={rarities}
          categories={categories}
        />
      </div>
    </div>
  );
}
