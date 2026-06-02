import { getChestCountPerRarity } from "@/queries/rarity";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import RarityChart from "./rarity-chart";
import RarityChancesButton from "./rarity-chances-button";
import { getTotalChests } from "@/queries/chest";

interface RarityChartCardProps {
  filters: FilterConfig;
}

export default async function RarityChartCard({
  filters,
}: RarityChartCardProps) {
  const rarities = await getChestCountPerRarity(filters);
  const totalChests = await getTotalChests(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rarities</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per rarity
        </CardDescription>
        <CardAction>
          <RarityChancesButton rarities={rarities} totalChests={totalChests} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <RarityChart rarities={rarities} />
      </CardContent>
    </Card>
  );
}
