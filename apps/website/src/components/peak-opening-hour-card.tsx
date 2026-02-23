import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { calculatePercentage, formatHourRange } from "@/lib/utils";

interface PeakOpeningHourCardProps {
  peakOpeningHourData?: {
    hour: number;
    count: number;
  };
  totalChests: number;
}

export default function PeakOpeningHourCard({
  peakOpeningHourData,
  totalChests,
}: PeakOpeningHourCardProps) {
  if (!peakOpeningHourData) {
    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Peak Opening Hours</CardDescription>
          <CardTitle className="text-2xl">-</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Peak Opening Hours</CardDescription>
        <CardTitle className="text-2xl">
          {formatHourRange(peakOpeningHourData.hour)}
        </CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">
        with {peakOpeningHourData.count} chests・
        {calculatePercentage(peakOpeningHourData.count, totalChests)}
      </CardFooter>
    </Card>
  );
}
