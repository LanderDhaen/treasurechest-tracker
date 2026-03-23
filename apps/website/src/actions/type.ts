"use server";

import { getServerSession } from "@/queries/auth";
import { createType } from "@/queries/type";
import { typeFormSchema, TypeFormValues } from "@/schemas/type";

export const createTypeAction = async (formData: TypeFormValues) => {
  const result = typeFormSchema.safeParse(formData);

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
        message: "You must be logged in to create a type.",
      },
    };
  }

  const { name } = result.data;

  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");

  const type = await createType({ name, slug });

  return {
    data: type,
    error: null,
  };
};
