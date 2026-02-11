import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

interface TotalChestCardProps {
  chestCount: number;
  description: string;
}

export default function TotalChestCard({
  chestCount,
  description,
}: TotalChestCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Total Treasure Chests</CardDescription>
        <CardTitle className="text-2xl">
          {chestCount.toLocaleString()}
        </CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">
        {description}
      </CardFooter>
    </Card>
  );
}
