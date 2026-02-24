import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Total Treasure Chests</CardDescription>
            <Skeleton className="h-8 w-1/8" />
          </CardHeader>
          <CardFooter>
            <Skeleton className="h-5 w-full" />
          </CardFooter>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Latest Treasure Chest</CardDescription>
            <Skeleton className="h-8 w-3/4" />
          </CardHeader>
          <CardFooter>
            <Skeleton className="h-5 w-full" />
          </CardFooter>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Peak Opening Hours</CardDescription>
            <Skeleton className="h-8 w-1/2" />
          </CardHeader>
          <CardFooter>
            <Skeleton className="h-5 w-full" />
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Rarities</CardTitle>
            <CardDescription>
              Shows the number of treasure chest opened per rarity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-video" />
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>
              Shows the number of treasure chests opened per category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-video" />
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Rewards</CardTitle>
          <CardDescription>
            Shows the number of treasure chests opened per reward
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-video" />
        </CardContent>
      </Card>
    </div>
  );
}
