import { cn } from "@/shared/lib/cn";
import { flexRender, type Row } from "@tanstack/react-table";

import { TableCell, TableRow } from "../../primitives";

import type { ReactNode } from "react";

type TableDataRowsProps<TData extends object> = {
  rows: Row<TData>[];
  isSingleSelection: boolean;
};

export const TableDataRows = <TData extends object>({
  rows,
  isSingleSelection,
}: TableDataRowsProps<TData>) => {
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
