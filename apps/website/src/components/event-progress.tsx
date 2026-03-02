import { Progress } from "./ui/progress";

interface EventProgressProps {
  openedChests: number;
  maxChests: number;
}

export default function EventProgress({
  openedChests,
  maxChests,
}: EventProgressProps) {
  const percentage = (openedChests / maxChests) * 100;

  return (
    <>
      <div className="flex justify-between">
        {openedChests} / {maxChests}
        <span className="text-muted-foreground">{percentage.toFixed(0)}%</span>
      </div>
      <Progress value={percentage} />
    </>
  );
}
