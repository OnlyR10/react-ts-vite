import { useDataTable } from "./core/useDataTable";
import { DataTableView } from "./view/DataTableView";

import type { TanStackTableProps } from "./types";

const TanStackTable = <TData extends object = object>({
  data,
  columns,
  containerClassName,
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
  const { table, rows, resolvedColumns, isSingleSelection } = useDataTable<TData>({
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

  return (
    <DataTableView
      table={table}
      rows={rows}
      resolvedColumns={resolvedColumns}
      isSingleSelection={isSingleSelection}
      enableSorting={enableSorting}
      isPending={isPending}
      isError={isError}
      emptyState={emptyState}
      containerClassName={containerClassName}
      className={className}
    />
  );
};

export { TanStackTable };
