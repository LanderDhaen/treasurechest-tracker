import { PackagePlus, PackageX } from "lucide-react";
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

export default function NoChests() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <PackageX />
        </EmptyMedia>
        <EmptyTitle>Nothing here yet</EmptyTitle>
        <EmptyDescription>
          Add your first treasure chest and watch this space come to life.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" asChild>
          <Link
            href={{
              pathname: "/chests/add",
              query: { returnTo: "/chests" },
            }}
          >
            <PackagePlus />
            Add chest
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
