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

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { chestFormSchema, ChestFormValues } from "@/schemas/chest";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import RarityBadge from "./rarity-badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import UnobtainableBadge from "./unobtainable-badge";
import { formatEventName } from "@/lib/event";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { formatDate } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { createChestAction } from "@/actions/chest";
import { FIRST_EVENT_START_DATE } from "@/constants/event";

interface ChestFormProps {
  accounts: {
    tag: string;
    name: string;
    townhall: number;
  }[];
  events: {
    code: string;
    name: string;
    edition: number;
  }[];
  rarities: {
    name: string;
    slug: string;
    rank: number;
  }[];
  categories: {
    name: string;
    rewards: {
      name: string;
      slug: string;
      minTownhall: number;
      isObtainable: boolean;
      minRarity: {
        name: string;
        rank: number;
      };
      maxRarity: {
        name: string;
        rank: number;
      };
    }[];
  }[];
}

const TODAY = new Date();
const DEFAULT_OPENED_AT = TODAY;

export default function ChestForm({
  accounts,
  events,
  rarities,
  categories,
}: ChestFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ChestFormValues>({
    resolver: zodResolver(chestFormSchema),
    defaultValues: {
      accountTag: accounts[0]?.tag || "",
      eventCode: events[0]?.code || "",
      raritySlug: rarities[0]?.slug || "",
      amount: 1,
      rewardSlug: "",
      openedAt: DEFAULT_OPENED_AT,
    },
  });

  const selectedAccountTag = useWatch({
    control: form.control,
    name: "accountTag",
  });

  const selectedAccount = accounts.find(
    (account) => account.tag === selectedAccountTag,
  );

  const selectedRaritySlug = useWatch({
    control: form.control,
    name: "raritySlug",
  });

  const selectedRarity = rarities.find(
    (rarity) => rarity.slug === selectedRaritySlug,
  );

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      rewards: category.rewards.filter((reward) => {
        const shouldExcludeForTownhallRule =
          !selectedAccount || reward.minTownhall <= selectedAccount.townhall;

        const shouldExcludeForRarityRule =
          !selectedRarity ||
          (reward.minRarity.rank <= selectedRarity.rank &&
            reward.maxRarity.rank >= selectedRarity.rank);

        return shouldExcludeForTownhallRule && shouldExcludeForRarityRule;
      }),
    }))
    .filter((category) => category.rewards.length > 0);

  const onSubmit = async (formData: ChestFormValues) => {
    setIsLoading(true);

    const { data: chest, error } = await createChestAction(formData);

    if (error) {
      if (error.field) {
        form.setError(error.field as keyof ChestFormValues, {
          message: error.message,
        });
      } else {
        toast.error(error.message);
      }
    } else {
      toast.success("Chest created successfully!");
      redirect(`/chests/${chest.id}`);
    }

    setIsLoading(false);
  };

  const updatedDate = (date: Date, time: string) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    date.setHours(hours, minutes, seconds);

    return date;
  };

  // TODO: Show event duration in the date picker, possibly disable dates outside of the event durations
  // TODO: Update dates based on selected event (start date, end date, duration)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Treasure Chest Form</CardTitle>
        <CardDescription className="text-center">
          Enter the details below to create a treasure chest.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="accountTag"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Account<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectTrigger
                      id="form-rhf-select-account"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {accounts.map((account) => (
                        <SelectItem
                          key={account.tag}
                          value={account.tag}
                          disabled={isLoading}
                        >
                          {account.name}・TH{account.townhall}
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
            <Controller
              name="eventCode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Event<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectTrigger
                      id="form-rhf-select-event"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {events.map((event) => (
                        <SelectItem
                          key={event.code}
                          value={event.code}
                          disabled={isLoading}
                        >
                          {formatEventName(event.name, event.edition)}
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
            <Controller
              name="raritySlug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Rarity<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  >
                    {rarities.map((rarity) => (
                      <Field
                        key={rarity.slug}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <RadioGroupItem
                          value={rarity.slug}
                          id={`form-rhf-radiogroup-${rarity.slug}`}
                          aria-invalid={fieldState.invalid}
                        />
                        <FieldLabel
                          htmlFor={`form-rhf-radiogroup-${rarity.slug}`}
                        >
                          <RarityBadge rarity={rarity.name} />
                        </FieldLabel>
                      </Field>
                    ))}
                  </RadioGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="amount"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Amount<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="number"
                    placeholder="Amount"
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
              name="rewardSlug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Reward<span className="text-red-500 -ml-1">*</span>
                  </FieldLabel>
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
                      <SelectValue placeholder="Select a reward" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {filteredCategories.map((category, index) => (
                        <SelectGroup key={category.name}>
                          <SelectLabel>
                            {category.name} ({category.rewards.length})
                          </SelectLabel>
                          {category.rewards.map((reward) => (
                            <SelectItem
                              key={reward.slug}
                              value={reward.slug}
                              disabled={isLoading}
                            >
                              {reward.name}
                              <UnobtainableBadge
                                isObtainable={reward.isObtainable}
                              />
                            </SelectItem>
                          ))}
                          {index < filteredCategories.length - 1 && (
                            <SelectSeparator />
                          )}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    Changing account or rarity will filter the rewards based on
                    their minimal townhall and rarity.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="openedAt"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldGroup className="flex-row">
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      Date<span className="text-red-500 -ml-1">*</span>
                    </FieldLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date-picker-range"
                          className="justify-start bg-white"
                          disabled={isLoading}
                          aria-invalid={fieldState.invalid}
                        >
                          <CalendarIcon />
                          {field.value
                            ? formatDate(field.value)
                            : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          defaultMonth={field.value}
                          selected={field.value}
                          disabled={(date) =>
                            date > TODAY || date < FIRST_EVENT_START_DATE
                          }
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`${field.name}-time`}>
                      Time<span className="text-red-500 -ml-1">*</span>
                    </FieldLabel>
                    <Input
                      type="time"
                      id={field.name}
                      step="1"
                      value={field.value.toTimeString().slice(0, 8)}
                      onChange={(e) => {
                        field.onChange(
                          updatedDate(field.value, e.target.value),
                        );
                      }}
                      disabled={isLoading}
                      aria-invalid={fieldState.invalid}
                      className="appearance-none bg-white [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </Field>
                </FieldGroup>
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
