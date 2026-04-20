"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { typeFormSchema, TypeFormValues } from "@/schemas/type";
import { createTypeAction } from "@/actions/type";
import { slugify } from "@/lib/utils";

export default function TypeForm({
  defaultValues,
}: {
  defaultValues: TypeFormValues;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TypeFormValues>({
    resolver: zodResolver(typeFormSchema),
    defaultValues: {
      name: defaultValues.name,
      slug: defaultValues.slug,
    },
  });

  const name = useWatch({
    control: form.control,
    name: "name",
  });

  useEffect(() => {
    form.setValue("slug", slugify(name));
  }, [name, form]);

  const onSubmit = async (formData: TypeFormValues) => {
    setIsLoading(true);

    const { data: type, error } = await createTypeAction(formData);

    setIsLoading(false);

    if (error) {
      if (error.field) {
        form.setError(error.field as keyof TypeFormValues, {
          message: error.message,
        });
      } else {
        toast.error(error.message);
      }
    } else {
      toast.success(`Type "${type.name}" created successfully!`);
      redirect(`/events/add?type=${type.slug}`);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Type Form</CardTitle>
        <CardDescription className="text-center">
          Enter the details below to create a type.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Name<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="text"
                    placeholder="Name"
                    disabled={isLoading}
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="slug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Slug<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="text"
                    placeholder="Slug"
                    disabled={isLoading}
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Spinner data-icon="inline-start" />
                    Creating...
                  </>
                ) : (
                  "Create"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                disabled={isLoading}
              >
                Reset
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
