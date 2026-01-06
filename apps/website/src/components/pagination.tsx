import PageSizeSelect from "./page-size-select";
import PageSelect from "./page-select";

interface PaginationProps {
  currentPage: number;
  currentPageSize: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  currentPageSize,
  totalPages,
}: PaginationProps) {
  return (
    <div className="flex w-full flex-col items-end md:flex-row md:items-center md:justify-end gap-4">
      <PageSizeSelect currentPageSize={currentPageSize} />
      <PageSelect
        currentPage={currentPage}
        currentPageSize={currentPageSize}
        totalPages={totalPages}
      />
    </div>
  );
}
