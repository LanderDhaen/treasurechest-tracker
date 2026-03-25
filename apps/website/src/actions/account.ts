"use server";

import { getClanByTag } from "@/queries/clan";
import { accountFormSchema, AccountFormValues } from "@/schemas/account";
import {
  createAccount,
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

export const submitAccountForm = async (formData: AccountFormValues) => {
  const result = accountFormSchema.safeParse(formData);

  if (!result.success) {
    return ValidationError("These type details are invalid.");
  }

  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError("You must be logged in to create a type.");
  }

  const { name, tag, townhall, clanTag } = result.data;

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

export const upgradeTownhall = async (accountId: number) => {
  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError("You must be logged in to create a type.");
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
    townhall: account.townhall + 1,
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
      townhall: updatedAccount.townhall,
    },
    error: null,
  };
};

export const changeTrackingStatus = async (accountId: number) => {
  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError("You must be logged in to create a type.");
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
    return UnauthorizedError("You must be logged in to create a type.");
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
