import { getServerSession } from "@/queries/auth";
import { getAllClans } from "@/queries/clan";
import AccountForm from "@/components/account-form";
import { notFound } from "next/navigation";
import { getHighestTownhall } from "@/queries/townhall";
import { accountFormSearchParamsSchema } from "@/schemas/account";

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
  const parsedParams = accountFormSearchParamsSchema.parse(rawParams);
  const { returnTo } = parsedParams;

  const townhall = await getHighestTownhall();
  const clans = await getAllClans();

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <AccountForm
          clans={clans}
          maxTownhallLevel={townhall.level}
          returnTo={returnTo}
        />
      </div>
    </div>
  );
}
