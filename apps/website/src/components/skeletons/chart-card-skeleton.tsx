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
  context?: string;
}

export default function ChartCardSkeleton({
  title,
  description,
  context,
}: ChartCardSkeletonProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
          {context && <span className="italic text-xs"> {context}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video" />
      </CardContent>
    </Card>
  );
}
