"use server";

import UnauthorizedError from "@/errors/unauthorized-error";
import UnknownError from "@/errors/unknown-error";
import ValidationError from "@/errors/validation-error";
import { getServerSession } from "@/queries/auth";
import { createSeries } from "@/queries/series";
import { seriesFormSchema, SeriesFormValues } from "@/schemas/series";
import { DatabaseError } from "pg";

export const createSeriesAction = async (formData: SeriesFormValues) => {
  const result = seriesFormSchema.safeParse(formData);

  if (!result.success) {
    return ValidationError();
  }

  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError();
  }

  const { name, code } = result.data;

  try {
    const series = await createSeries({ name, code });

    return {
      data: series,
      error: null,
    };
  } catch (error) {
    if (!(error instanceof DatabaseError) || error.code !== "23505") {
      return UnknownError();
    }
    switch (error.constraint) {
      case "series_name_key":
        return {
          data: null,
          error: {
            code: "SERIES_NAME_EXISTS",
            field: "name",
            message: "A series with this name already exists.",
          },
        };
      case "series_code_key":
        return {
          data: null,
          error: {
            code: "SERIES_CODE_EXISTS",
            field: "code",
            message: "A series with this code already exists.",
          },
        };
      default:
        return UnknownError();
    }
  }
};
