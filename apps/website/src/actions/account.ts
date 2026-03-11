"use server";

import { getClanByTag } from "@/queries/clan";
import { accountFormSchema, AccountFormValues } from "@/schemas/account";
import { createAccount, updateAccount } from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { DatabaseError } from "pg";
import { revalidatePath } from "next/cache";

export const submitAccountForm = async (formData: AccountFormValues) => {
  const result = accountFormSchema.safeParse(formData);

  if (!result.success) {
    return {
      data: null,
      error: {
        code: "VALIDATION_ERROR",
        message: "These values are invalid.",
      },
    };
  }

  const { name, tag, townhall, clanTag } = result.data;

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

  try {
    const account = await createAccount({
      name,
      tag,
      townhall,
      clanId: clan.id,
    });

    return { data: account, error: null };
  } catch (error) {
    if (error instanceof DatabaseError && error.code === "23505") {
      return {
        data: null,
        error: {
          code: "ACCOUNT_EXISTS",
          message: "An account with this tag already exists.",
        },
      };
    } else {
      return {
        data: null,
        error: {
          code: "UNKNOWN_ERROR",
          message: "An unknown error occurred. Please try again later.",
        },
      };
    }
  }
};

export const upgradeTownhall = async (accountId: number, townhall: number) => {
  const account = await updateAccount(accountId, { townhall });

  revalidatePath(`/accounts/${account.tag}`);
};
