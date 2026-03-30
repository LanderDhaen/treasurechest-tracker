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
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

interface ChestFormProps {
  rarities: {
    name: string;
    slug: string;
  }[];
  categories: {
    name: string;
    rewards: {
      name: string;
      slug: string;
      isObtainable: boolean;
    }[];
  }[];
}

export default function ChestForm({ rarities, categories }: ChestFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ChestFormValues>({
    resolver: zodResolver(chestFormSchema),
    defaultValues: {
      raritySlug: rarities[0]?.slug || "",
      amount: 1,
      rewardSlug: categories[0]?.rewards[0]?.slug || "",
    },
  });

  const onSubmit = async (formData: ChestFormValues) => {
    setIsLoading(true);

    console.log(formData);

    setIsLoading(false);
  };

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
              name="raritySlug"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
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
                </FieldSet>
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
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {categories.map((category, index) => (
                        <SelectGroup key={category.name}>
                          <SelectLabel>{category.name}</SelectLabel>
                          {category.rewards.map((reward) => (
                            <SelectItem
                              key={reward.slug}
                              value={reward.slug}
                              disabled={isLoading}
                            >
                              {reward.name}
                            </SelectItem>
                          ))}
                          {index < categories.length - 1 && <SelectSeparator />}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
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
