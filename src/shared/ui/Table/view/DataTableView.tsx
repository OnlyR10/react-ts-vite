import { cn } from "@/shared/lib/cn";
import { TableBodyContent } from "@/shared/ui/Table/parts/body/TableBodyContent";
import { SortableHeaderCell } from "@/shared/ui/Table/parts/sorting/SortableHeaderCell";
import { type ColumnDef, type Row, type Table as TanStackTableType } from "@tanstack/react-table";

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
                <SortableHeaderCell header={header} enableSorting={enableSorting} />
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        <TableBodyContent
          isPending={isPending}
          isError={isError}
          rows={rows}
          colSpan={resolvedColumns.length}
          emptyState={emptyState}
          isSingleSelection={isSingleSelection}
        />
      </TableBody>
    </Table>
  );
};
