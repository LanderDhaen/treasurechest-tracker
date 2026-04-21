import { SearchIcon, X } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Button } from "./ui/button";
import useQueryParams from "@/hooks/use-query-params";

export default function NoSearchResults() {
  const { searchParams, replaceUrl } = useQueryParams();

  const handleClearSearch = () => {
    searchParams.delete("search");
    replaceUrl(searchParams);
  };

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>No matches found</EmptyTitle>
        <EmptyDescription>
          Try different keywords or check your spelling.
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
