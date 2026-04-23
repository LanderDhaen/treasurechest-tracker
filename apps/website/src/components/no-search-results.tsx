"use client";

import { SearchX, X } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Button } from "./ui/button";
import { useSearch } from "@/hooks/use-search";
import { usePagination } from "@/hooks/use-pagination";

export default function NoSearchResults() {
  const [, setSearch] = useSearch();
  const [, setPagination] = usePagination();

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchX />
        </EmptyMedia>
        <EmptyTitle>No matches found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search criteria to find what you&apos;re looking
          for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button
          variant="outline"
          onClick={() => {
            setSearch("");
            setPagination({ page: 1 });
          }}
        >
          <X />
          Clear search
        </Button>
      </EmptyContent>
    </Empty>
  );
}
