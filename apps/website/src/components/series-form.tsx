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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { seriesFormSchema, SeriesFormValues } from "@/schemas/series";
import { createSeriesAction } from "@/actions/series";

export default function SeriesForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SeriesFormValues>({
    resolver: zodResolver(seriesFormSchema),
    defaultValues: {
      name: "",
      code: "",
    },
  });

  const onSubmit = async (formData: SeriesFormValues) => {
    setIsLoading(true);

    const { data, error } = await createSeriesAction(formData);

    if (error) {
      switch (error.code) {
        case "SERIES_NAME_EXISTS":
          form.setError("name", {
            message: error.message,
          });
          break;
        case "SERIES_CODE_EXISTS":
          form.setError("code", {
            message: error.message,
          });
          break;
        default:
          toast.error(error.message);
      }
    } else {
      toast.success(`Series "${data.name}" created successfully!`);
      redirect(`/events/add`);
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Series Form</CardTitle>
        <CardDescription className="text-center">
          Enter the details below to create a series.
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
              name="code"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Code<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="text"
                    placeholder="Code"
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
