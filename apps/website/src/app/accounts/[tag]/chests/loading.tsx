import PaginationSkeleton from "@/components/skeletons/pagination-skeleton";
import ToolbarSkeleton from "@/components/skeletons/toolbar-skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Loading() {
  return (
    <Card className="shadow-md">
      <CardContent className="flex flex-col gap-4">
        <ToolbarSkeleton />
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead colSpan={6} className="text-center">
                  <div className="w-full h-5.5" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={6}>
                    <Skeleton className="w-full h-5.5" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <PaginationSkeleton />
      </CardContent>
    </Card>
  );
}
