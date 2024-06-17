import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/Input";
import DataTablePagination from "./datatable-pagination";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FileDown, FileText, Sheet } from "lucide-react";

const DataTable = ({ data, columns, footer }) => {
  const [pagination, setPagination] = useState({
    pageSize: 5,
    pageIndex: 0,
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const [exportType, setExportType] = useState(null);
  const menuRef = useRef(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      globalFilter,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      return row
        .getValue(columnId)
        ?.toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.map((col) => col.header)],
      body: data.map((row) => columns.map((col) => row[col.accessor])),
    });
    doc.save("data.pdf");
  };

  const handleExport = (type) => {
    if (type === "excel") {
      exportToExcel();
    } else if (type === "pdf") {
      exportToPDF();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setExportType(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar..."
          className="mb-4 w-1/3 mr-4"
        />
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setExportType(exportType ? null : "options")}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            <FileDown />
          </button>
          {exportType === "options" && (
            <div className="absolute top-full right-0 bg-white border border-gray-200 shadow-lg rounded-md p-2 space-y-2 z-10">
              <button
                onClick={() => handleExport("excel")}
                className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100 rounded-md pr-2 py-1"
              >
                <Sheet className="m-2" /> Excel
              </button>
              <button
                onClick={() => handleExport("pdf")}
                className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100 rounded-md pr-2 py-1"
              >
                <FileText className="m-2" /> PDF
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white border-[1px] rounded-md border-neutral-300">
        <Table>
          <TableCaption>{footer}</TableCaption>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No se encuentra información.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
};

export default DataTable;
