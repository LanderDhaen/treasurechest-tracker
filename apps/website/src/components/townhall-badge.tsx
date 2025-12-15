import { Badge } from "@/components/ui/badge";

export default function TownhallBadge({
  level,
  color,
}: {
  level: number;
  color: string;
}) {
  return <Badge style={{ backgroundColor: `#${color}` }}>TH{level}</Badge>;
}
