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
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const SIZES = [5, 10, 20, 50, 100];

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
  const paginationButtons = [
    {
      key: "first",
      disabled: currentPage <= 1,
      page: 1,
      icon: <ChevronsLeft />,
    },
    {
      key: "prev",
      disabled: currentPage <= 1,
      page: currentPage - 1,
      icon: <ChevronLeft />,
    },
    {
      key: "next",
      disabled: currentPage >= totalPages,
      page: currentPage + 1,
      icon: <ChevronRight />,
    },
    {
      key: "last",
      disabled: currentPage >= totalPages,
      page: totalPages,
      icon: <ChevronsRight />,
    },
  ];

  const searchParams = useSearchParams();
  const navigation = useRouter();
  const pathName = usePathname();

  const handlePageSizeChange = (pageSize: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pageSize", pageSize);
    params.set("page", "1");
    navigation.push(`${pathName}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
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
      <div className="flex items-center gap-4">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          {paginationButtons.map((button) => (
            <Button
              key={button.key}
              variant="outline"
              size="icon"
              disabled={button.disabled}
              onClick={() => handlePageChange(button.page)}
            >
              {button.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
