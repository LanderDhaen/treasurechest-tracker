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
import { Button } from "./ui/button";
import { PAGE_SIZES } from "@/constants/common";
import { parseAsInteger, useQueryState } from "nuqs";

interface PaginationProps {
  defaultPage: number;
  defaultPageSize: number;
  totalPages: number;
}

export default function Pagination({
  defaultPage,
  defaultPageSize,
  totalPages,
}: PaginationProps) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(defaultPage).withOptions({
      shallow: false,
      clearOnDefault: false,
    }),
  );

  const [pageSize, setPageSize] = useQueryState(
    "pageSize",
    parseAsInteger.withDefault(defaultPageSize).withOptions({
      shallow: false,
      clearOnDefault: false,
    }),
  );

  const paginationButtons = [
    {
      key: "first",
      disabled: page <= 1,
      page: 1,
      icon: <ChevronsLeft />,
    },
    {
      key: "prev",
      disabled: page <= 1,
      page: page - 1,
      icon: <ChevronLeft />,
    },
    {
      key: "next",
      disabled: page >= totalPages,
      page: page + 1,
      icon: <ChevronRight />,
    },
    {
      key: "last",
      disabled: page >= totalPages,
      page: totalPages,
      icon: <ChevronsRight />,
    },
  ];

  return (
    <div className="flex flex-col items-end md:flex-row md:items-center md:justify-end gap-4">
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <Select
          value={pageSize.toString()}
          onValueChange={(pageSize) => {
            setPage(null);
            setPageSize(parseInt(pageSize) || defaultPageSize);
          }}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
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
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          {paginationButtons.map((button) => (
            <Button
              key={button.key}
              variant="outline"
              size="icon"
              disabled={button.disabled}
              onClick={() => setPage(button.page)}
            >
              {button.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
