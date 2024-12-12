"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { account } from "@/db/schema/account";
import { townhall } from "@/db/schema/townhall";

export const getAllAccounts = async () => {
  const accounts = await db
    .select({
      ID: account.ID,
      username: account.username,
      clan: account.clan,
      isActive: account.isActive,
      townhall: {
        ID: townhall.ID,
        level: townhall.level,
        color: townhall.color,
      },
    })
    .from(account)
    .innerJoin(townhall, eq(account.townhallID, townhall.ID));

  return accounts;
};
