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
    <div className="flex flex-1 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
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
