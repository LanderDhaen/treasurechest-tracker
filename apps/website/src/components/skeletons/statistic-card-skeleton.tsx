import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

interface SectionCardsSkeletonProps {
  title: string;
}

export default function StatisticCardSkeleton({
  title,
}: SectionCardsSkeletonProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <Skeleton className="h-8 w-44" />
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-5 w-100" />
      </CardFooter>
    </Card>
  );
}
