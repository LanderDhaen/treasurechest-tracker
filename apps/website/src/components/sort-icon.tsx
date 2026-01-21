import { ChevronDown, ChevronUp } from "lucide-react";

export default function SortIcon({
  direction,
}: {
  direction: "asc" | "desc" | null;
}) {
  return direction === "asc" ? (
    <ChevronUp size={16} />
  ) : (
    <ChevronDown size={16} />
  );
}
