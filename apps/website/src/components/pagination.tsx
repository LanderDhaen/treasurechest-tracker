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
  return (
    <div className="flex gap-2">
      {currentPage > 1 ? (
        <Button asChild variant="outline" size="icon">
          <Link href={`?page=${currentPage - 1}`}>
            <ChevronLeft />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft />
        </Button>
      )}

      {currentPage < totalPages ? (
        <Button asChild variant="outline" size="icon">
          <Link href={`?page=${currentPage + 1}`}>
            <ChevronRight />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="icon" disabled>
          <ChevronRight />
        </Button>
      )}
    </div>
  );
}
