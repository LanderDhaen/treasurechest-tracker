import { Progress } from "./ui/progress";

interface EventProgressProps {
  count: number;
  maxChests: number;
}

export default function EventProgress({
  count,
  maxChests,
}: EventProgressProps) {
  const percentage = (count / maxChests) * 100;

  return (
    <>
      <div className="flex justify-between">
        {count} / {maxChests}
        <span className="text-muted-foreground">{percentage.toFixed(0)}%</span>
      </div>
      <Progress value={percentage} />
    </>
  );
}
