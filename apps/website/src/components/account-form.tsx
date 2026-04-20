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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  accountFormSchema,
  AccountFormSearchParams,
  AccountFormValues,
} from "@/schemas/account";

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
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { redirect } from "next/navigation";

interface AccountFormProps {
  clans: {
    tag: string;
    name: string;
  }[];
  defaultValues: {
    name: string;
    tag: string;
    townhallLevel: number;
    clanTag: string;
  };
  maxTownhallLevel: number;
  returnTo: AccountFormSearchParams["returnTo"];
}

export default function AccountForm({
  clans,
  maxTownhallLevel,
  returnTo,
  defaultValues,
}: AccountFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: defaultValues.name,
      tag: defaultValues.tag,
      townhallLevel: defaultValues.townhallLevel,
      clanTag: defaultValues.clanTag,
    },
  });

  const onSubmit = async (formData: AccountFormValues) => {
    setIsLoading(true);

    const { data, error } = await submitAccountForm(formData);

    setIsLoading(false);

    if (error) {
      if (error.field) {
        form.setError(error.field as keyof AccountFormValues, {
          message: error.message,
        });
      } else {
        toast.error(error.message);
      }
    } else {
      toast.success(`Account "${data.name}" created successfully!`);

      if (returnTo === "/chests/add") {
        redirect(`/chests/add?account=${data.tag}`);
      } else {
        redirect(returnTo);
      }
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
              name="tag"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Tag<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>#</InputGroupAddon>
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      type="text"
                      disabled={isLoading}
                      required
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="townhallLevel"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Townhall<span className="text-red-500 -ml-1">*</span>{" "}
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="number"
                    placeholder="Townhall"
                    disabled={isLoading}
                    min={1}
                    max={maxTownhallLevel}
                    required
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  <FieldDescription>
                    Currently TH{maxTownhallLevel} is the highest townhall
                    level.
                  </FieldDescription>
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
                  <FieldLabel htmlFor={field.name}>
                    Clan<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
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
