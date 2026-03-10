"use server";

import { getClanByTag } from "@/queries/clan";
import { AccountFormValues } from "@/schemas/account";
import { createAccount } from "@/queries/account";
import { getServerSession } from "@/queries/auth";

export const submitAccountForm = async ({
  name,
  tag,
  townhall,
  clanTag,
}: AccountFormValues) => {
  const session = await getServerSession();

  if (!session) {
    return {
      data: null,
      error: {
        code: "UNAUTHORIZED",
        message: "You must be logged in to create an account.",
      },
    };
  }

  const clan = await getClanByTag(clanTag);

  if (!clan) {
    return {
      data: null,
      error: {
        code: "CLAN_NOT_FOUND",
        message: "The specified clan was not found.",
      },
    };
  }

  const account = await createAccount({ name, tag, townhall, clanId: clan.id });

  return { data: account, error: null };
};
