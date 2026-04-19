"use server";

import { getClanByTag } from "@/queries/clan";
import { accountFormSchema, AccountFormValues } from "@/schemas/account";
import {
  createAccount,
  createAccountHistory,
  deleteAccount,
  getAccountById,
  updateAccount,
} from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { DatabaseError } from "pg";
import { revalidatePath } from "next/cache";
import { deleteChestsByAccountId } from "@/queries/chest";
import UnauthorizedError from "@/errors/unauthorized-error";
import ValidationError from "@/errors/validation-error";
import UnknownError from "@/errors/unknown-error";
import { getTownhallByLevel } from "@/queries/townhall";

export const submitAccountForm = async (formData: AccountFormValues) => {
  const result = accountFormSchema.safeParse(formData);

  if (!result.success) {
    return ValidationError();
  }

  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError();
  }

  const { name, tag, townhallLevel, clanTag } = result.data;

  const townhall = await getTownhallByLevel(townhallLevel);

  if (!townhall) {
    return {
      data: null,
      error: {
        code: "TOWNHALL_NOT_FOUND",
        message: "The specified townhall level was not found.",
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
      townhallId: townhall.id,
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
      return UnknownError();
    }
  }
};

export const upgradeTownhall = async (accountId: number) => {
  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError();
  }

  const account = await getAccountById(accountId);

  if (!account) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  const nextTownhall = await getTownhallByLevel(account.townhall.level + 1);

  if (!nextTownhall) {
    return {
      data: null,
      error: {
        code: "MAX_TOWNHALL_REACHED",
        message: "The account has already reached the maximum townhall level.",
      },
    };
  }

  const updatedAccount = await updateAccount(account.id, {
    townhallId: nextTownhall.id,
  });

  if (!updatedAccount) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  revalidatePath(`/accounts/${updatedAccount.tag}`);

  return {
    data: {
      name: updatedAccount.name,
      townhall: nextTownhall.level,
    },
    error: null,
  };
};

export const changeTrackingStatus = async (accountId: number) => {
  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError();
  }

  const account = await getAccountById(accountId);

  if (!account) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  const updatedAccount = await updateAccount(account.id, {
    isTracked: !account.isTracked,
  });

  if (!updatedAccount) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  await createAccountHistory({
    validFrom: account.updatedAt,
    validTo: new Date(),
    name: account.name,
    tag: account.tag,
    isTracked: account.isTracked,
    townhallId: account.townhall.id,
    clanId: account.clan.id,
    accountId: account.id,
  });

  revalidatePath(`/accounts/${updatedAccount.tag}`);

  return {
    data: {
      name: updatedAccount.name,
      isTracked: updatedAccount.isTracked,
    },
    error: null,
  };
};

export const deleteAccountAction = async (accountId: number) => {
  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError();
  }

  const account = await getAccountById(accountId);

  if (!account) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  const deletedAccount = await deleteAccount(account.id);

  if (!deletedAccount) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  const deletedChests = await deleteChestsByAccountId(account.id);

  return {
    data: {
      deletedAccount: deletedAccount,
      deletedChestsCount: deletedChests.length,
    },
    error: null,
  };
};
