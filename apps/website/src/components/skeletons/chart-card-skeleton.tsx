import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

interface ChartCardSkeletonProps {
  title: string;
  description: string;
}

export default function ChartCardSkeleton({
  title,
  description,
}: ChartCardSkeletonProps) {
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
