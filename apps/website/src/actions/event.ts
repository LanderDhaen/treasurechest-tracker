"use server";

import { getServerSession } from "@/queries/auth";
import { deleteChestsByEventId } from "@/queries/chest";
import { getEventById, deleteEvent } from "@/queries/event";

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
