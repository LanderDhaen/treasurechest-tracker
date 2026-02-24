import SectionCardsSkeleton from "@/components/skeletons/statistic-card-skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

interface ChartSkeletonProps {
  title: string;
  description: string;
}

export default function ChartSkeleton({
  title,
  description,
}: ChartSkeletonProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video" />
      </CardContent>
    </Card>
  );
}
