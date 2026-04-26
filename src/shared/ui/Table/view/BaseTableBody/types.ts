import { type Row } from "@tanstack/react-table";

import type { ReactNode } from "react";

export type TBaseTableBodyProps<TData extends object> = {
  isPending: boolean;
  isError: boolean;
  rows: Row<TData>[];
  colSpan: number;
  emptyState?: ReactNode;
  isSingleSelection: boolean;
};
