"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import useQueryParams from "@/hooks/use-query-params";
import { Button } from "./ui/button";
import { PAGE_SIZES } from "@/constants/common";

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

  const { searchParams, pushUrl } = useQueryParams();

  const handlePageSizeChange = (pageSize: string) => {
    searchParams.set("pageSize", pageSize);
    searchParams.set("page", "1");
    pushUrl(searchParams);
  };

  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    pushUrl(searchParams);
  };

  return (
    <div className="flex flex-col items-end md:flex-row md:items-center md:justify-end gap-4">
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
              {PAGE_SIZES.map((size) => (
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
