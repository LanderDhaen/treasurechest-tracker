import { getChestCountPerRewardPerCategory } from "@/actions/category";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {
  const categories = await getChestCountPerRewardPerCategory();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {categories.map((category) => (
            <li key={category.id}>
              {category.name} ({category.count} chest
              {category.count !== 1 ? "s" : ""})
              {category.rewards.length > 0 && (
                <ul className="list-disc pl-5">
                  {category.rewards.map((reward) => (
                    <li key={reward.id}>
                      {reward.name} ({reward.count} chests, {reward.amount}{" "}
                      total)
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
