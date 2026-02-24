import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export default function EventNotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The event you&apos;re looking for doesn&apos;t exist.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <EmptyDescription>
          <Link href="/events">View all events</Link>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
