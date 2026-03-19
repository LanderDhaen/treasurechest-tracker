"use server";

import { getServerSession } from "@/queries/auth";
import { deleteChestsByEventId } from "@/queries/chest";
import {
  getEventById,
  deleteEvent,
  updateEvent,
  createEvent,
} from "@/queries/event";
import { getTypeByName } from "@/queries/type";
import { eventFormSchema, EventFormValues } from "@/schemas/event";
import { revalidatePath } from "next/cache";

export const createEventAction = async (formData: EventFormValues) => {
  // TODO: Add more robust validation and error handling for the form data, including checking for valid seriesCode and type values.

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

  const { dateRange, maxChests, typeName, seriesCode } = result.data;

  const type = await getTypeByName(typeName);

  if (!type) {
    return {
      data: null,
      error: {
        code: "TYPE_NOT_FOUND",
        message: "The specified type was not found.",
      },
    };
  }

  const event = await createEvent({
    code: seriesCode,
    edition: 1, // TODO: Get the latest edition number for the series and increment it
    startDate: dateRange.from,
    endDate: dateRange.to,
    maxChests: maxChests,
    typeId: type.id, // TODO: Get typeId based on typeName
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
