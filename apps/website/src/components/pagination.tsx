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
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <PageSizeSelect currentPageSize={currentPageSize} />
      <PageSelect
        currentPage={currentPage}
        currentPageSize={currentPageSize}
        totalPages={totalPages}
      />
    </div>
  );
}
