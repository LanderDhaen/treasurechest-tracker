import { Badge } from "@/components/ui/badge";

export default function TownhallBadge({ level }: { level: number }) {
  const colorTownhall = (townhall: number) => {
    switch (townhall) {
      case 9:
        return "bg-gray-400";
      case 10:
        return "bg-red-400";
      case 11:
        return "bg-yellow-400";
      case 12:
        return "bg-blue-300";
      case 13:
        return "bg-blue-500";
      case 14:
        return "bg-green-600";
      case 15:
        return "bg-violet-400";
      case 16:
        return "bg-orange-400";
      case 17:
        return "bg-black text-white";
      case 18:
        return "bg-blue-200";
      default:
        return "bg-orange-200";
    }
  };

  return <Badge className={colorTownhall(level)}>TH{level}</Badge>;
}
