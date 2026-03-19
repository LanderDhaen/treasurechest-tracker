"use server";

import { getServerSession } from "@/queries/auth";
import { deleteChestsByEventId } from "@/queries/chest";
import {
  getEventById,
  deleteEvent,
  updateEvent,
  createEvent,
} from "@/queries/event";
import { eventFormSchema, EventFormValues } from "@/schemas/event";
import { revalidatePath } from "next/cache";

export const createEventAction = async (formData: EventFormValues) => {
  // TODO: Add more robust validation and error handling for the form data, including checking for valid seriesCode and type values.

  const event = await createEvent({
    code: formData.seriesCode,
    edition: 1, // TODO: Get the latest edition number for the series and increment it
    startDate: formData.dateRange.from,
    endDate: formData.dateRange.to,
    maxChests: formData.maxChests,
    typeId: 1, // TODO: Get typeId based on formData.type
    seriesId: 1, // TODO: Get seriesId based on formData.seriesCode
  });

  return event;
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
