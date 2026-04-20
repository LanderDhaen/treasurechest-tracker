"use server";

import UnknownError from "@/errors/unknown-error";
import { getServerSession } from "@/queries/auth";
import { createType } from "@/queries/type";
import { typeFormSchema, TypeFormValues } from "@/schemas/type";
import { DatabaseError } from "pg";

export const createTypeAction = async (formData: TypeFormValues) => {
  const result = typeFormSchema.safeParse(formData);

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
        message: "You must be logged in to create a type.",
      },
    };
  }

  const { name, slug } = result.data;

  try {
    const type = await createType({ name, slug });

    return {
      data: type,
      error: null,
    };
  } catch (error) {
    if (!(error instanceof DatabaseError) || error.code !== "23505") {
      return UnknownError();
    }
    switch (error.constraint) {
      case "type_name_key":
        return {
          data: null,
          error: {
            code: "TYPE_NAME_EXISTS",
            field: "name",
            message: "A type with this name already exists.",
          },
        };
      case "type_slug_key":
        return {
          data: null,
          error: {
            code: "TYPE_SLUG_EXISTS",
            field: "slug",
            message: "A type with this slug already exists.",
          },
        };

      default:
        return UnknownError();
    }
  }
};
