"use server";

import UnauthorizedError from "@/errors/unauthorized-error";
import UnknownError from "@/errors/unknown-error";
import ValidationError from "@/errors/validation-error";
import { getAccountByTag } from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { createChest } from "@/queries/chest";
import { getEventByCode } from "@/queries/event";
import { getRarityBySlug } from "@/queries/rarity";
import { getRewardBySlug } from "@/queries/reward";
import { chestFormSchema, ChestFormValues } from "@/schemas/chest";
import { DatabaseError } from "pg";

export const createChestAction = async (formData: ChestFormValues) => {
  const result = chestFormSchema.safeParse(formData);

  if (!result.success) {
    return ValidationError();
  }

  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError();
  }

  const { accountTag, eventCode, raritySlug, amount, rewardSlug, openedAt } =
    result.data;

  const account = await getAccountByTag(accountTag);

  if (!account) {
    return {
      data: null,
      error: {
        code: "ACCOUNT_NOT_FOUND",
        message: "The specified account was not found.",
      },
    };
  }

  const event = await getEventByCode(eventCode);

  if (!event) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        message: "The specified event was not found.",
      },
    };
  }

  const rarity = await getRarityBySlug(raritySlug);

  if (!rarity) {
    return {
      data: null,
      error: {
        code: "RARITY_NOT_FOUND",
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
        message: "The specified reward was not found.",
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
