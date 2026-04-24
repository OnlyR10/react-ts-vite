import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import { cn } from "@/shared/lib/cn";
import { flexRender, type Header } from "@tanstack/react-table";

type SortableHeaderCellProps<TData extends object> = {
  header: Header<TData, unknown>;
  enableSorting: boolean;
};

export const SortableHeaderCell = <TData extends object>({
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
        "flex items-center gap-1.5 -mx-1 px-1 py-0.5 rounded-sm hover:bg-muted/50 active:bg-muted transition-colors text-left font-medium w-full",
        sortDirection && "text-foreground",
      )}
      onClick={column.getToggleSortingHandler()}
    >
      {flexRender(column.columnDef.header, header.getContext())}
      <SortIcon className="size-3.5 flex-shrink-0 opacity-70" />
    </button>
  );
};
