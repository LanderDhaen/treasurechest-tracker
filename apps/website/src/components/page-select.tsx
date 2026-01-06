import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  currentPageSize: number;
  totalPages: number;
}

export default function PageSelect({
  currentPage,
  currentPageSize,
  totalPages,
}: PaginationProps) {
  const buttons = [
    {
      key: "first",
      disabled: currentPage <= 1,
      href: `?page=1&pageSize=${currentPageSize}`,
      icon: <ChevronsLeft />,
    },
    {
      key: "prev",
      disabled: currentPage <= 1,
      href: `?page=${currentPage - 1}&pageSize=${currentPageSize}`,
      icon: <ChevronLeft />,
    },
    {
      key: "next",
      disabled: currentPage >= totalPages,
      href: `?page=${currentPage + 1}&pageSize=${currentPageSize}`,
      icon: <ChevronRight />,
    },
    {
      key: "last",
      disabled: currentPage >= totalPages,
      href: `?page=${totalPages}&pageSize=${currentPageSize}`,
      icon: <ChevronsRight />,
    },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map(({ key, disabled, href, icon }) =>
        disabled ? (
          <Button key={key} variant="outline" size="icon" disabled>
            {icon}
          </Button>
        ) : (
          <Button key={key} asChild variant="outline" size="icon">
            <Link href={href}>{icon}</Link>
          </Button>
        )
      )}
    </div>
  );
}
