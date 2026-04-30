import { cn } from "@/shared/lib/cn";

import { useDataTable } from "./core/useDataTable";
import { Table } from "./primitives";
import { BaseTableBody } from "./view/BaseTableBody/BaseTableBody";
import { BaseTableHeader } from "./view/BaseTableHeader/BaseTableHeader";

import type { TanStackTableProps } from "./types";

export const BaseTable = <TData extends object = object>({
  data,
  columns,
  className,
  rowSelectionMode = "none",
  showSelectionColumn = true,
  onSelectedRowChange,
  onSelectedRowsChange,
  enableSorting = true,
  getRowId,
  isPending = false,
  isError = false,
  emptyState,
  tableOptions = {},
}: TanStackTableProps<TData>) => {
  const { table, rows, resolvedColumns, isSingleSelection, isMultipleSelection, selectedRows } =
    useDataTable<TData>({
      data,
      columns,
      rowSelectionMode,
      showSelectionColumn,
      onSelectedRowChange,
      onSelectedRowsChange,
      enableSorting,
      getRowId,
      tableOptions,
    });
  const selectedCount = selectedRows.length;
  const totalCount = rows.length;

  return (
    <div className="space-y-6">
      <Table
        containerClassName={cn("relative w-full overflow-x-auto")}
        className={cn("w-full caption-bottom text-sm", className)}
      >
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
      {isMultipleSelection && (
        <div className="text-sm text-muted-foreground font-normal">
          {selectedCount} из {totalCount} записи(ей) выбрано
        </div>
      )}
    </div>
  );
};
