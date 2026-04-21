import { UserRoundPlus, UserRoundX } from "lucide-react";
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

export default function NoAccounts() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UserRoundX />
        </EmptyMedia>
        <EmptyTitle>Nothing here yet</EmptyTitle>
        <EmptyDescription>
          Add your first account and watch this space come to life.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" asChild>
          <Link
            href={{
              pathname: "/accounts/add",
              query: { returnTo: "/accounts" },
            }}
          >
            <UserRoundPlus />
            Add account
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
