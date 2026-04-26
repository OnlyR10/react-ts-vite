import { type Table as TanStackTableType } from "@tanstack/react-table";

export type BaseTableHeaderProps<TData extends object> = {
  table: TanStackTableType<TData>;
  enableSorting: boolean;
};
