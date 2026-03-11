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
    <div className="flex flex-1 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AccountForm clans={clans} />
      </div>
    </div>
  );
}
