"use server";

import { formatEventName } from "@/lib/event";
import { formatDate } from "@/lib/utils";
import { getAccountByTag } from "@/queries/account";
import { getServerSession } from "@/queries/auth";
import { createChest, getTotalChests } from "@/queries/chest";
import { getEventByCode } from "@/queries/event";
import { getRarityBySlug } from "@/queries/rarity";
import { getRewardBySlug } from "@/queries/reward";
import { chestFormSchema, ChestFormValues } from "@/schemas/chest";
import { DatabaseError } from "pg";

export const createChestAction = async (formData: ChestFormValues) => {
  const result = chestFormSchema.safeParse(formData);

  if (!result.success) {
    return {
      data: null,
      error: {
        code: "VALIDATION_ERROR",
        message: "The provided data is invalid.",
      },
    };
  }

  const session = await getServerSession();

  if (!session) {
    return {
      data: null,
      error: {
        code: "UNAUTHORIZED",
        message: "You must be logged in to create a treasure chest.",
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

  const isDuringEvent =
    openedAt >= event.startDate && openedAt <= event.endDate;

  if (!isDuringEvent) {
    return {
      data: null,
      error: {
        code: "CHEST_OUTSIDE_EVENT_DURATION",
        field: "openedAt",
        message: `The opening time must be during ${formatEventName(event.name, event.edition)} (${formatDate(event.startDate)} - ${formatDate(event.endDate)}).`,
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

  const isValidTownhall = reward.minTownhall <= account.townhall.level;

  if (!isValidTownhall) {
    return {
      data: null,
      error: {
        code: "TOWNHALL_TOO_LOW",
        field: "accountTag",
        message: `The specified reward requires at least TH${reward.minTownhall}.`,
      },
    };
  }

  const isCorrectRarity =
    reward.minRarity.rank <= rarity.rank &&
    reward.maxRarity.rank >= rarity.rank;

  if (!isCorrectRarity) {
    const message =
      reward.minRarity.rank === reward.maxRarity.rank
        ? `${reward.name} can only be ${reward.minRarity.name}.`
        : `${reward.name} can only be between ${reward.minRarity.name} and ${reward.maxRarity.name}.`;

    return {
      data: null,
      error: {
        code: "RARITY_REWARD_MISMATCH",
        field: "raritySlug",
        message: message,
      },
    };
  }

  const totalChests = await getTotalChests({
    eventId: event.id,
    accountId: account.id,
  });

  const isExceedingMaxChests = totalChests >= event.maxChests;

  if (isExceedingMaxChests) {
    return {
      data: null,
      error: {
        code: "MAX_CHESTS_REACHED",
        field: "eventCode",
        message: `The maximum number of chests for this event (${event.maxChests}) has already been reached for this account.`,
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
      data: {
        id: chest.id,
        account: account.name,
        event: formatEventName(event.name, event.edition),
      },
      error: null,
    };
  } catch (error) {
    if (error instanceof DatabaseError && error.code === "23505") {
      return {
        data: null,
        error: {
          code: "CHEST_EXISTS",
          field: "openedAt",
          message:
            "A treasure chest with the same opening time already exists.",
        },
      };
    } else {
      if (error instanceof DatabaseError && error.code === "23505") {
        return {
          data: null,
          error: {
            code: "CHEST_EXISTS",
            field: "openedAt",
            message:
              "A treasure chest with the same opening time already exists.",
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
  }
};
