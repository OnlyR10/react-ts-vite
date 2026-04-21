import { useEffect, useMemo, useState } from "react";

import { cn } from "@/shared/lib/cn";
import {
  type ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  type Row,
  type RowSelectionState,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { createSelectionColumn } from "./lib/createSelectionColumn";
import { getSelectionFlags } from "./lib/getSelectionFlags";
import { renderSortableHeader } from "./lib/renderSortableHeader";
import { renderTableBodyContent } from "./lib/renderTableBodyContent";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./primitives";

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
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const { isSingleSelection, isMultipleSelection, selectionEnabled, showSelectionCol } =
    getSelectionFlags(rowSelectionMode, showSelectionColumn);

  const resolvedColumns = useMemo<ColumnDef<TData, unknown>[]>(
    () => (showSelectionCol ? [createSelectionColumn<TData>(), ...columns] : columns),
    [columns, showSelectionCol],
  );

  const table = useReactTable<TData>({
    data,
    columns: resolvedColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: selectionEnabled,
    enableMultiRowSelection: isMultipleSelection,
    enableSorting,
    state: {
      rowSelection: selectionEnabled ? rowSelection : {},
      sorting,
    },
    onRowSelectionChange: selectionEnabled ? setRowSelection : undefined,
    onSortingChange: setSorting,
    getRowId: getRowId
      ? (originalRow: TData, index: number, parent?: Row<TData>) =>
          getRowId(originalRow, index, parent)
      : undefined,
    ...tableOptions,
  });

  const selectedRows = useMemo(() => {
    if (!selectionEnabled) {
      return [];
    }

    return table.getSelectedRowModel().rows.map((row) => row.original);
  }, [data, rowSelection, selectionEnabled]);
  const selectedRow = useMemo(() => selectedRows[0] ?? null, [selectedRows]);

  useEffect(() => {
    if (isMultipleSelection && onSelectedRowsChange) {
      onSelectedRowsChange(selectedRows);
    }
  }, [isMultipleSelection, onSelectedRowsChange, selectedRows]);

  useEffect(() => {
    if (isSingleSelection && onSelectedRowChange) {
      onSelectedRowChange(selectedRow);
    }
  }, [isSingleSelection, onSelectedRowChange, selectedRow]);

  const rows = table.getRowModel().rows;
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

export { TanStackTable };
