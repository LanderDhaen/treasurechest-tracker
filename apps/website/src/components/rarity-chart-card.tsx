import { getChestCountPerRarity } from "@/actions/rarity";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChestCountRarityChart from "./rarity-chart";
import { FilterConfig } from "@/types/common";

interface RarityChartCardProps {
  filters: FilterConfig;
}

export default async function RarityChartCard({
  filters,
}: RarityChartCardProps) {
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
        <ChestCountRarityChart rarities={rarities} />
      </CardContent>
    </Card>
  );
}
