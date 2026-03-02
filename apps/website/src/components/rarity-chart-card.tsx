import { getChestCountPerRarity } from "@/actions/rarity";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import RarityChart from "./rarity-chart";

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
          Shows the number of treasure chests opened per rarity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RarityChart rarities={rarities} />
      </CardContent>
    </Card>
  );
}
