import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMemo } from "react";

const DataTablePagination = ({ table }) => {
  const pageSize = [5, 10, 20, table.getFilteredRowModel().rows.length];
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const paginationRange = useMemo(() => {
    const start = Math.max(0, pageIndex - 2);
    const end = Math.min(pageCount, pageIndex + 3);
    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [pageIndex, pageCount]);

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1" />
      <div className="flex items-center space-x-8"></div>
      {/* <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Filas por pagina</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {pageSize.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {pageIndex + 1} of {pageCount}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Ir a la pagina anterior</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {paginationRange.map((page) => (
          <Button
            key={page}
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.setPageIndex(page)}
            disabled={pageIndex === page}
          >
            {page + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Ir a la siguiente pagina</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DataTablePagination;
