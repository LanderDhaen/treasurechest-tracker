"use server";

import UnauthorizedError from "@/errors/unauthorized-error";
import ValidationError from "@/errors/validation-error";
import { getServerSession } from "@/queries/auth";
import { createType } from "@/queries/type";
import { typeFormSchema, TypeFormValues } from "@/schemas/type";
import { DatabaseError } from "pg";

export const createTypeAction = async (formData: TypeFormValues) => {
  const result = typeFormSchema.safeParse(formData);

  if (!result.success) {
    return ValidationError("These type details are invalid.");
  }

  const session = await getServerSession();

  if (!session) {
    return UnauthorizedError("You must be logged in to create a type.");
  }

  const { name, slug } = result.data;

  try {
    const type = await createType({ name, slug });

    return {
      data: type,
      error: null,
    };
  } catch (error) {
    if (error instanceof DatabaseError && error.code === "23505") {
      return {
        data: null,
        error: {
          code: "TYPE_EXISTS",
          message: "A type with this name already exists.",
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
