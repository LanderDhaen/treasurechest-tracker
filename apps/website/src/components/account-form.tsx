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
import { accountFormSchema, AccountFormValues } from "@/schemas/account";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Spinner } from "./ui/spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { submitAccountForm } from "@/actions/account";
import { toast } from "sonner";
import { redirect } from "next/navigation";

interface AccountFormProps {
  clans: {
    tag: string;
    name: string;
  }[];
}

export default function AccountForm({ clans }: AccountFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: "",
      tag: "",
      townhall: 18,
      clanTag: clans[0].tag || "",
    },
  });

  const onSubmit = async (formData: AccountFormValues) => {
    setIsLoading(true);

    const { data, error } = await submitAccountForm(formData);

    setIsLoading(false);

    if (error) {
      switch (error.code) {
        case "UNAUTHORIZED":
          toast.error(error.message);
          break;
        case "CLAN_NOT_FOUND":
          form.setError("clanTag", { message: error.message });
          break;
        case "ACCOUNT_EXISTS":
          form.setError("tag", { message: error.message });
          break;
        default:
          toast.error("An unexpected error occurred. Please try again later.");
      }
    } else {
      toast.success(`Account "${data.name}" created successfully!`);
      redirect("/accounts");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Account Form</CardTitle>
        <CardDescription className="text-center">
          Enter the details below to create an account.
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
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
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
              name="tag"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Tag</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="text"
                    placeholder="Tag"
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
              name="townhall"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Townhall</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="number"
                    placeholder="Townhall"
                    disabled={isLoading}
                    min={1}
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="clanTag"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Clan</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-select-language"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {clans.map((clan) => (
                        <SelectItem key={clan.tag} value={clan.tag}>
                          {clan.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
