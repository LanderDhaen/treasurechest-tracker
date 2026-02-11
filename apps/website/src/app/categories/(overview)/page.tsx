import { getChestCountPerRewardPerCategory } from "@/actions/category";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";

export default async function Page() {
  const categories = await getChestCountPerRewardPerCategory();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {categories.map((category) => (
        <ChestCountRewardChart key={category.name} category={category} />
      ))}
    </div>
  );
}
