import { cn } from "@/shared/lib/cn";
import { flexRender } from "@tanstack/react-table";

import { TableCell, TableRow } from "../../primitives";

import type { TableDataRowsProps } from "./types";
import type { ReactNode } from "react";

export const BaseTableRow = <TData extends object>({
  rows,
  isSingleSelection,
}: TableDataRowsProps<TData>) => {
  return rows.map((row) => (
    <TableRow
      key={row.id}
      data-state={row.getIsSelected() ? "selected" : undefined}
      className={cn(
        isSingleSelection && "cursor-pointer",
        "border-y transition-colors",
        "data-[state=selected]:bg-muted",
      )}
      onClick={isSingleSelection ? row.getToggleSelectedHandler() : undefined}
    >
      {row.getVisibleCells().map((cell) => {
        const cellRenderer = cell.column.columnDef.cell;

        return (
          <TableCell key={cell.id} className="px-3 py-2 whitespace-nowrap">
            {cellRenderer
              ? flexRender(cellRenderer, cell.getContext())
              : (cell.getValue() as ReactNode)}
          </TableCell>
        );
      })}
    </TableRow>
  ));
};
