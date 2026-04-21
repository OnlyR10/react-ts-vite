import { cn } from "@/shared/lib/cn";
import { flexRender, type Row } from "@tanstack/react-table";

import { TableCell, TableRow } from "../primitives";

import type { TanStackTableProps } from "../types";
import type { ReactNode } from "react";

const TABLE_MESSAGES = {
  loading: "Загрузка данных...",
  error: "Ошибка загрузки данных",
  empty: "Нет данных.",
} as const;

type TableBodyContentParams<TData extends object> = {
  isPending: boolean;
  isError: boolean;
  rows: Row<TData>[];
  colSpan: number;
  emptyState: TanStackTableProps<TData>["emptyState"];
  isSingleSelection: boolean;
};

export const renderTableBodyContent = <TData extends object>({
  isPending,
  isError,
  rows,
  colSpan,
  emptyState,
  isSingleSelection,
}: TableBodyContentParams<TData>) => {
  if (isPending) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan} className="h-24 text-center text-muted-foreground">
          {TABLE_MESSAGES.loading}
        </TableCell>
      </TableRow>
    );
  }

  if (isError) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan} className="h-24 text-center text-destructive">
          {TABLE_MESSAGES.error}
        </TableCell>
      </TableRow>
    );
  }

  if (rows.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan} className="h-24 text-center text-muted-foreground">
          {emptyState ?? TABLE_MESSAGES.empty}
        </TableCell>
      </TableRow>
    );
  }

  return rows.map((row) => (
    <TableRow
      key={row.id}
      data-state={row.getIsSelected() ? "selected" : undefined}
      className={cn(isSingleSelection && "cursor-pointer")}
      onClick={isSingleSelection ? row.getToggleSelectedHandler() : undefined}
    >
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
  ));
};
