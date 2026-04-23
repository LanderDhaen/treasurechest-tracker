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
import { useClearSearch } from "@/hooks/use-clear-search";

export default function NoSearchResults() {
  const handleClearSearch = useClearSearch();

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
        <Button variant="outline" onClick={handleClearSearch}>
          <X />
          Clear search
        </Button>
      </EmptyContent>
    </Empty>
  );
}
