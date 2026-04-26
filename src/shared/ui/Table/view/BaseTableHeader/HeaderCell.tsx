import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import { cn } from "@/shared/lib/cn";
import { flexRender, type Header } from "@tanstack/react-table";

type SortableHeaderCellProps<TData extends object> = {
  header: Header<TData, unknown>;
  enableSorting: boolean;
};

export const HeaderCell = <TData extends object>({
  header,
  enableSorting,
}: SortableHeaderCellProps<TData>) => {
  if (header.isPlaceholder) return null;

  const column = header.column;
  const canSort = enableSorting && column.getCanSort?.();

  if (!canSort) {
    return flexRender(column.columnDef.header, header.getContext());
  }

  const sortDirection = column.getIsSorted();
  const SortIcon =
    sortDirection === "desc" ? ArrowDown : sortDirection === "asc" ? ArrowUp : ArrowUpDown;

  return (
    <button
      type="button"
      className={cn(
        "flex items-center gap-2.5 transition-colors font-medium text-sm text-foreground",
      )}
      onClick={column.getToggleSortingHandler()}
    >
      {flexRender(column.columnDef.header, header.getContext())}
      <SortIcon className="size-2.5" />
    </button>
  );
};
