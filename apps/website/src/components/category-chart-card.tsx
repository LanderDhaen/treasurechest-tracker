import { getChestCountPerCategory } from "@/actions/category";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import CategoryChart from "./category-chart";

export interface CategoryChartCardProps {
  filters: FilterConfig;
}

export default async function CategoryChartCard({
  filters,
}: CategoryChartCardProps) {
  const categories = await getChestCountPerCategory(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CategoryChart categories={categories} />
      </CardContent>
    </Card>
  );
}
