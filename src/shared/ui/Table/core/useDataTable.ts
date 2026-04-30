import { useEffect, useMemo, useState } from "react";

import {
  type ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  type Row,
  type RowSelectionState,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { createSelectionColumn } from "../lib/createSelectionColumn";
import { getSelectionFlags } from "../lib/getSelectionFlags";

import type { TanStackTableProps, UseDataTableResult } from "../types";

export const useDataTable = <TData extends object = object>({
  data,
  columns,
  rowSelectionMode = "none",
  onSelectedRowChange,
  onSelectedRowsChange,
  enableSorting = true,
  getRowId,
}: TanStackTableProps<TData>): UseDataTableResult<TData> => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const { isSingleSelection, isMultipleSelection, selectionEnabled } =
    getSelectionFlags(rowSelectionMode);

  const resolvedColumns = useMemo<ColumnDef<TData, unknown>[]>(
    () => (isMultipleSelection ? [createSelectionColumn<TData>(), ...columns] : columns),
    [columns, isMultipleSelection],
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
  });

  const selectedRows = useMemo(() => {
    if (!selectionEnabled) {
      return [];
    }

    return table.getSelectedRowModel().rows.map((row) => row.original);
  }, [rowSelection, selectionEnabled, table]);

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

  return {
    table,
    rows: table.getRowModel().rows,
    resolvedColumns,
    isSingleSelection,
    isMultipleSelection,
    selectedRow,
    selectedRows,
  };
};
