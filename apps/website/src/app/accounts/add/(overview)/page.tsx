import { getServerSession } from "@/queries/auth";
import { getAllClans } from "@/queries/clan";
import AccountForm from "@/components/account-form";
import { notFound } from "next/navigation";
import { getHighestTownhall } from "@/queries/townhall";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const townhall = await getHighestTownhall();

  const maxTownhallLevel = townhall.level;

  const clans = await getAllClans();

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <AccountForm clans={clans} maxTownhallLevel={maxTownhallLevel} />
      </div>
    </div>
  );
}
