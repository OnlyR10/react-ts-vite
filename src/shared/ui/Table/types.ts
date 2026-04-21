import type { ColumnDef, TableOptions } from "@tanstack/react-table";
import type { ReactNode } from "react";

export type SharedTableOptions<TData extends object> = Omit<
  Partial<TableOptions<TData>>,
  | "columns"
  | "data"
  | "enableMultiRowSelection"
  | "enableRowSelection"
  | "enableSorting"
  | "getCoreRowModel"
  | "getRowId"
  | "getSortedRowModel"
  | "onRowSelectionChange"
  | "onSortingChange"
  | "state"
>;

export type TanStackTableProps<TData extends object = object> = {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  containerClassName?: string;
  className?: string;
  rowSelectionMode?: "none" | "single" | "multiple";
  showSelectionColumn?: boolean;
  onSelectedRowChange?: (row: TData | null) => void;
  onSelectedRowsChange?: (rows: TData[]) => void;
  enableSorting?: boolean;
  getRowId?: TableOptions<TData>["getRowId"];
  isPending?: boolean;
  isError?: boolean;
  emptyState?: ReactNode;
  tableOptions?: SharedTableOptions<TData>;
};

export type TanStackGetRowId<TData extends object> = NonNullable<
  TanStackTableProps<TData>["getRowId"]
>;
