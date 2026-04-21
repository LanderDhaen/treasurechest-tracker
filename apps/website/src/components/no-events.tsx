import { CalendarX2, CalendarPlus } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";

export default function NoEvents() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CalendarX2 />
        </EmptyMedia>
        <EmptyTitle>Nothing here yet</EmptyTitle>
        <EmptyDescription>
          Add your first event and watch this space come to life.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" asChild>
          <Link
            href={{
              pathname: "/events/add",
              query: { returnTo: "/events" },
            }}
          >
            <CalendarPlus />
            Add event
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
