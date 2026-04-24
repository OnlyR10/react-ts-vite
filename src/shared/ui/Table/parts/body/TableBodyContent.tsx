import { type Row } from "@tanstack/react-table";

import { TableBodyStates } from "../states/TableBodyStates";
import { TableDataRows } from "./TableDataRows";

import type { ReactNode } from "react";

type TableBodyContentProps<TData extends object> = {
  isPending: boolean;
  isError: boolean;
  rows: Row<TData>[];
  colSpan: number;
  emptyState?: ReactNode;
  isSingleSelection: boolean;
};

export const TableBodyContent = <TData extends object>({
  isPending,
  isError,
  rows,
  colSpan,
  emptyState,
  isSingleSelection,
}: TableBodyContentProps<TData>) => {
  if (isPending || isError || rows.length === 0) {
    return (
      <TableBodyStates
        isPending={isPending}
        isError={isError}
        isEmpty={rows.length === 0}
        colSpan={colSpan}
        emptyState={emptyState}
      />
    );
  }

  return <TableDataRows rows={rows} isSingleSelection={isSingleSelection} />;
};
