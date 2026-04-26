import { type Row } from "@tanstack/react-table";

export type TableDataRowsProps<TData extends object> = {
  rows: Row<TData>[];
  isSingleSelection: boolean;
};
