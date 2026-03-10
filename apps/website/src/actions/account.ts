"use server";

import { getClanByTag } from "@/queries/clan";
import { AccountFormValues } from "@/schemas/account";
import { createAccount } from "@/queries/account";

export const submitAccountForm = async ({
  name,
  tag,
  townhall,
  clanTag,
}: AccountFormValues) => {
  const clan = await getClanByTag(clanTag);

  if (!clan) {
    return {
      success: false,
      error: "CLAN_NOT_FOUND",
    };
  }

  const clanId = clan.id;

  await createAccount({ name, tag, townhall, clanId });

  return { success: true, error: null };
};
