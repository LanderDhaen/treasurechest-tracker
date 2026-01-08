"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SIZES = ["5", "10", "20", "50", "100"];

import PageSelect from "./page-select";
interface PaginationProps {
  currentPage: number;
  currentPageSize: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  currentPageSize,
  totalPages,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const navigation = useRouter();
  const pathName = usePathname();

  const handlePageSizeChange = (pageSize: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pageSize", pageSize.toString());
    params.set("page", "1");
    navigation.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex w-full flex-col items-end md:flex-row md:items-center md:justify-end gap-4">
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <Select
          onValueChange={(pageSize) => {
            handlePageSizeChange(pageSize);
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
      <PageSelect
        currentPage={currentPage}
        currentPageSize={currentPageSize}
        totalPages={totalPages}
      />
    </div>
  );
}
