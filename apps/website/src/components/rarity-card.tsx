import { getChestCountPerRarity } from "@/actions/rarity";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChestCountRarityChart from "./rarity-chart";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import { FilterConfig } from "@/types/common";

interface RarityCardProps {
  filters: FilterConfig;
}

export default async function RarityCard({ filters }: RarityCardProps) {
  const rarities = await getChestCountPerRarity(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rarities</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per rarity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Skeleton className="aspect-video" />}>
          <ChestCountRarityChart rarities={rarities} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
