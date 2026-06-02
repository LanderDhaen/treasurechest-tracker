import { Badge } from "@/components/ui/badge";

export default function RarityBadge({ rarity }: { rarity: string }) {
  const colorRarity = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-black";
      case "Rare":
        return "bg-blue-50 text-blue-600";
      case "Epic":
        return "bg-purple-50 text-purple-600";
      case "Legendary":
        return "bg-yellow-50 text-yellow-600";
      default:
        return "bg-gray-100 text-black";
    }
  };

  return <Badge className={colorRarity(rarity)}>{rarity}</Badge>;
}
