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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { eventFormSchema, EventFormValues } from "@/schemas/event";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon, PlusIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { createEventAction } from "@/actions/event";
import { formatEventName } from "@/lib/event";
import { ButtonGroup } from "./ui/button-group";
import Link from "next/link";

interface EventFormProps {
  series: {
    code: string;
    name: string;
  }[];
  types: {
    name: string;
    slug: string;
  }[];

  defaultValues: {
    seriesCode?: string;
    typeSlug?: string;
  };
}

const DEFAULT_FROM_DATE = new Date();
const DEFAULT_TO_DATE = new Date();
const DEFAULT_MAX_CHESTS = 1;

export default function EventForm({
  series,
  types,
  defaultValues,
}: EventFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      dateRange: {
        from: DEFAULT_FROM_DATE,
        to: DEFAULT_TO_DATE,
      },
      maxChests: DEFAULT_MAX_CHESTS,
      typeSlug: defaultValues.typeSlug || types[0].slug || "",
      seriesCode: defaultValues.seriesCode || series[0].code || "",
    },
  });

  const onSubmit = async (formData: EventFormValues) => {
    setIsLoading(true);

    const { data: event, error } = await createEventAction(formData);

    setIsLoading(false);

    if (error) {
      switch (error.code) {
        case "VALIDATION_ERROR":
          toast.error(error.message);
          break;
        case "UNAUTHORIZED":
          toast.error(error.message);
          break;
        case "TYPE_NOT_FOUND":
          form.setError("typeSlug", { message: error.message });
          break;
        case "SERIES_NOT_FOUND":
          form.setError("seriesCode", { message: error.message });
          break;
        case "EVENT_EXISTS":
          toast.error(error.message);
          break;
        default:
          toast.error("An unexpected error occurred. Please try again later.");
      }
    } else {
      toast.success(
        `Event "${formatEventName(event.name, event.edition)}" created successfully!`,
      );
      redirect("/events");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Event Form</CardTitle>
        <CardDescription className="text-center">
          Enter the details below to create an event.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="seriesCode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Series<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <ButtonGroup>
                    <ButtonGroup className="w-full">
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-select-language"
                          aria-invalid={fieldState.invalid}
                          className="w-full"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {series.map((s) => (
                            <SelectItem key={s.code} value={s.code}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-black"
                        disabled={isLoading}
                        asChild
                      >
                        <Link href="/series/add">
                          <PlusIcon />
                        </Link>
                      </Button>
                    </ButtonGroup>
                  </ButtonGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="typeSlug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Type<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <ButtonGroup>
                    <ButtonGroup className="w-full">
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-select-language"
                          aria-invalid={fieldState.invalid}
                          className="w-full"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {types.map((t) => (
                            <SelectItem key={t.slug} value={t.slug}>
                              {t.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-black"
                        disabled={isLoading}
                        asChild
                      >
                        <Link href="/types/add">
                          <PlusIcon />
                        </Link>
                      </Button>
                    </ButtonGroup>
                  </ButtonGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="maxChests"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Max Chests<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="number"
                    placeholder="Max Chests"
                    disabled={isLoading}
                    required
                    min={1}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="dateRange"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Duration
                    <span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date-picker-range"
                        className="justify-start bg-white"
                      >
                        <CalendarIcon />
                        {field?.value.from ? (
                          field.value.from ? (
                            <>
                              {formatDate(field.value.from)} -{" "}
                              {formatDate(field.value.to)}
                            </>
                          ) : (
                            formatDate(field.value.to)
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        defaultMonth={field.value.from}
                        selected={{
                          from: field.value.from,
                          to: field.value.to,
                        }}
                        onSelect={field.onChange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
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
