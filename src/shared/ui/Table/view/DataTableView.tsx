import { cn } from "@/shared/lib/cn";
import { type ColumnDef, type Row, type Table as TanStackTableType } from "@tanstack/react-table";

import { renderSortableHeader } from "../lib/renderSortableHeader";
import { renderTableBodyContent } from "../lib/renderTableBodyContent";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../primitives";

import type { TanStackTableProps } from "../types";

type DataTableViewProps<TData extends object> = {
  table: TanStackTableType<TData>;
  rows: Row<TData>[];
  resolvedColumns: ColumnDef<TData, unknown>[];
  isSingleSelection: boolean;
  enableSorting: boolean;
  isPending: boolean;
  isError: boolean;
  emptyState: TanStackTableProps<TData>["emptyState"];
  containerClassName?: string;
  className?: string;
};

export const DataTableView = <TData extends object>({
  table,
  rows,
  resolvedColumns,
  isSingleSelection,
  enableSorting,
  isPending,
  isError,
  emptyState,
  containerClassName,
  className,
}: DataTableViewProps<TData>) => {
  const bodyContent = renderTableBodyContent({
    isPending,
    isError,
    rows,
    colSpan: resolvedColumns.length,
    emptyState,
    isSingleSelection,
  });

  return (
    <Table
      containerClassName={cn("overflow-hidden rounded-md border", containerClassName)}
      className={className}
    >
      <TableHeader className="bg-muted/30 sticky top-0 z-10">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className="px-3 py-2">
                {renderSortableHeader(header, enableSorting)}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>{bodyContent}</TableBody>
    </Table>
  );
};
