import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const buttons = [
    {
      key: "prev",
      disabled: currentPage <= 1,
      href: `?page=${currentPage - 1}`,
      icon: <ChevronLeft />,
    },
    {
      key: "next",
      disabled: currentPage >= totalPages,
      href: `?page=${currentPage + 1}`,
      icon: <ChevronRight />,
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
