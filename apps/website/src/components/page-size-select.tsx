"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";

const SIZES = [5, 10, 20, 50, 100];

export default function PageSizeSelect({
  currentPageSize,
}: {
  currentPageSize: number;
}) {
  const navigation = useRouter();

  return (
    <div className="flex items-center gap-2">
      <span className="hidden md:block">Rows per page:</span>
      <Select
        onValueChange={(pageSize) => {
          navigation.replace(`?page=1&pageSize=${pageSize}`);
        }}
      >
        <SelectTrigger className="w-20">
          <SelectValue placeholder={`${currentPageSize}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {SIZES.map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
