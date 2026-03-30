"use server";

import UnknownError from "@/errors/unknown-error";
import { getAccountByTag } from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { createChest } from "@/queries/chest";
import { getEventByCode } from "@/queries/event";
import { getRarityBySlug } from "@/queries/rarity";
import { getRewardBySlug } from "@/queries/reward";
import { chestFormSchema, ChestFormValues } from "@/schemas/chest";

export const createChestAction = async (formData: ChestFormValues) => {
  const result = chestFormSchema.safeParse(formData);

  if (!result.success) {
    return {
      data: null,
      error: {
        code: "VALIDATION_ERROR",
        message: "There were validation errors with the provided data.",
      },
    };
  }

  const session = await getServerSession();

  if (!session) {
    return {
      data: null,
      error: {
        code: "UNAUTHORIZED",
        message: "You must be logged in to perform this action.",
      },
    };
  }

  const { accountTag, eventCode, raritySlug, amount, rewardSlug, openedAt } =
    result.data;

  const account = await getAccountByTag(accountTag);

  if (!account) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        field: "accountTag",
        message: "The specified account was not found.",
      },
    };
  }

  if (account.isTracked === false) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_TRACKED",
        field: "accountTag",
        message: "The specified account is not tracked.",
      },
    };
  }

  const event = await getEventByCode(eventCode);

  if (!event) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        field: "eventCode",
        message: "The specified event was not found.",
      },
    };
  }

  if (event.isChestCreationAllowed === false) {
    return {
      data: null,
      error: {
        code: "CHEST_CREATION_NOT_ALLOWED",
        field: "eventCode",
        message: "The specified event does not allow new treasure chests.",
      },
    };
  }

  const rarity = await getRarityBySlug(raritySlug);

  if (!rarity) {
    return {
      data: null,
      error: {
        code: "RARITY_NOT_FOUND",
        field: "raritySlug",
        message: "The specified rarity was not found.",
      },
    };
  }

  const reward = await getRewardBySlug(rewardSlug);

  if (!reward) {
    return {
      data: null,
      error: {
        code: "REWARD_NOT_FOUND",
        field: "rewardSlug",
        message: "The specified reward was not found.",
      },
    };
  }

  const isCorrectRarity =
    reward.category.minRarity.chance <= rarity.chance &&
    reward.category.maxRarity.chance >= rarity.chance;

  if (!isCorrectRarity) {
    return {
      data: null,
      error: {
        code: "RARITY_REWARD_MISMATCH",
        field: "raritySlug",
        message: `${reward.name} can only be between ${reward.category.minRarity.name} and ${reward.category.maxRarity.name}.`,
      },
    };
  }

  try {
    const chest = await createChest({
      amount,
      openedAt,
      rarityId: rarity.id,
      accountId: account.id,
      eventId: event.id,
      rewardId: reward.id,
    });

    return {
      data: chest,
      error: null,
    };
  } catch (error) {
    console.error("Error creating chest:", error);
    return UnknownError();
  }
};
