"use server";

import { getServerSession } from "@/queries/auth";
import { deleteChestsByEventId } from "@/queries/chest";
import {
  getEventById,
  deleteEvent,
  updateEvent,
  createEvent,
} from "@/queries/event";
import { getSeriesByCode } from "@/queries/series";
import { getTypeBySlug } from "@/queries/type";
import { eventFormSchema, EventFormValues } from "@/schemas/event";
import { revalidatePath } from "next/cache";
import { DatabaseError } from "pg";

export const createEventAction = async (formData: EventFormValues) => {
  const result = eventFormSchema.safeParse(formData);

  if (!result.success) {
    return {
      data: null,
      error: {
        code: "VALIDATION_ERROR",
        message: "These values are invalid.",
      },
    };
  }

  const session = await getServerSession();

  if (!session) {
    return {
      data: null,
      error: {
        code: "UNAUTHORIZED",
        message: "You must be logged in to create an event.",
      },
    };
  }

  const { dateRange, maxChests, typeSlug, seriesCode } = result.data;

  const type = await getTypeBySlug(typeSlug);

  if (!type) {
    return {
      data: null,
      error: {
        code: "TYPE_NOT_FOUND",
        message: "The specified type was not found.",
      },
    };
  }

  const series = await getSeriesByCode(seriesCode);

  if (!series) {
    return {
      data: null,
      error: {
        code: "SERIES_NOT_FOUND",
        message: "The specified series was not found.",
      },
    };
  }

  const edition = series.latestEvent ? series.latestEvent.edition + 1 : 1;
  const code = `${seriesCode}${edition}`;

  try {
    const event = await createEvent({
      code: code,
      edition: edition,
      startDate: dateRange.from,
      endDate: dateRange.to,
      maxChests: maxChests,
      typeId: type.id,
      seriesId: series.id,
    });

    return {
      data: {
        name: series.name,
        edition: event.edition,
      },
      error: null,
    };
  } catch (error) {
    if (error instanceof DatabaseError && error.code === "23505") {
      return {
        data: null,
        error: {
          code: "EVENT_EXISTS",
          message: "An event with this code already exists.",
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

export const changeChestCreationAllowedStatus = async (eventId: number) => {
  const session = await getServerSession();

  if (!session) {
    return {
      data: null,
      error: {
        code: "UNAUTHORIZED",
        message: "You must be logged in to update an event.",
      },
    };
  }

  const event = await getEventById(eventId);

  if (!event) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        message: "The specified event was not found.",
      },
    };
  }

  const updatedEvent = await updateEvent(event.id, {
    isChestCreationAllowed: !event.isChestCreationAllowed,
  });

  if (!updatedEvent) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        message: "The specified event was not found.",
      },
    };
  }

  revalidatePath(`/events/${updatedEvent.code}`);

  return {
    data: {
      name: updatedEvent.name,
      edition: updatedEvent.edition,
      isChestCreationAllowed: updatedEvent.isChestCreationAllowed,
    },
    error: null,
  };
};

export const deleteEventAction = async (eventId: number) => {
  const session = await getServerSession();

  if (!session) {
    return {
      data: null,
      error: {
        code: "UNAUTHORIZED",
        message: "You must be logged in to delete an event.",
      },
    };
  }

  const event = await getEventById(eventId);

  if (!event) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        message: "The specified event was not found.",
      },
    };
  }

  const deletedEvent = await deleteEvent(event.id);

  if (!deletedEvent) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        message: "The specified event was not found.",
      },
    };
  }

  const deletedChests = await deleteChestsByEventId(event.id);

  return {
    data: {
      deletedEvent: deletedEvent,
      deletedChestsCount: deletedChests.length,
    },
    error: null,
  };
};
