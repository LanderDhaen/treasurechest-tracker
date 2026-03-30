import { getServerSession } from "@/queries/auth";
import { getAllClans } from "@/queries/clan";
import AccountForm from "@/components/account-form";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const clans = await getAllClans();

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <AccountForm clans={clans} />
      </div>
    </div>
  );
}
