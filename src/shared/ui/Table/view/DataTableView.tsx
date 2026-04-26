import { cn } from "@/shared/lib/cn";
import { type ColumnDef, type Row, type Table as TanStackTableType } from "@tanstack/react-table";

import { Table } from "../primitives";
import { BaseTableBody } from "./BaseTableBody/BaseTableBody";
import { BaseTableHeader } from "./BaseTableHeader/BaseTableHeader";

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
  className,
}: DataTableViewProps<TData>) => {
  const selectedCount = table.getSelectedRowModel().rows.length;
  const totalCount = rows.length;

  return (
    <div className="space-y-6">
      <Table containerClassName={cn("text-sm")} className={className}>
        <BaseTableHeader table={table} enableSorting={enableSorting} />

        <BaseTableBody
          isPending={isPending}
          isError={isError}
          rows={rows}
          colSpan={resolvedColumns.length}
          emptyState={emptyState}
          isSingleSelection={isSingleSelection}
        />
      </Table>
      <div className="text-sm text-muted-foreground font-normal">
        {selectedCount} из {totalCount} записи(ей) выбрано
      </div>{" "}
      {/* //TODO: Тут подумаю как сделать получше */}
    </div>
  );
};
