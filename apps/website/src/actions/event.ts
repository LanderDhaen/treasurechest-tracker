"use server";

import { getServerSession } from "@/queries/auth";
import { getEventById, updateEvent } from "@/queries/event";

export const deleteEvent = async (eventId: number) => {
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

  const updatedEvent = await updateEvent(event.id, { isActive: false });

  if (!updatedEvent) {
    return {
      data: null,
      error: {
        code: "EVENT_NOT_FOUND",
        message: "The specified event was not found.",
      },
    };
  }

  return {
    data: updatedEvent,
    error: null,
  };
};
