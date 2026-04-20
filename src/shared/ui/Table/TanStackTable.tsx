import { cn } from "@/shared/lib/cn";
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./primitives";

import type { ReactNode } from "react";

type TanStackTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  containerClassName?: string;
  className?: string;
};

const TanStackTable = <TData,>({
  data,
  columns,
  containerClassName,
  className,
}: TanStackTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table
      containerClassName={cn("overflow-hidden rounded-md border", containerClassName)}
      className={className}
    >
      <TableHeader className="bg-muted/30">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className="px-3 py-2">
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const cellRenderer = cell.column.columnDef.cell;

              return (
                <TableCell key={cell.id} className="px-3 py-2">
                  {cellRenderer
                    ? flexRender(cellRenderer, cell.getContext())
                    : (cell.getValue() as ReactNode)}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { TanStackTable };
export type { TanStackTableProps };
