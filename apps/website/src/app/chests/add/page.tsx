import ChestForm from "@/components/chest-form";
import { getServerSession } from "@/queries/auth";
import { getAllRarities } from "@/queries/rarity";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const rarities = await getAllRarities();

  return (
    <div className="flex flex-1 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ChestForm rarities={rarities} />
      </div>
    </div>
  );
}
