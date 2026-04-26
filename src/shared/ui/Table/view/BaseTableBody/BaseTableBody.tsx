import { TableBody, TableCell, TableRow } from "../../primitives";
import { BaseTableRow } from "../BaseTableRow/BaseTableRow";

import type { TBaseTableBodyProps } from "./types";

const TABLE_MESSAGES = {
  loading: "Загрузка данных...",
  error: "Ошибка загрузки данных",
  empty: "Нет данных.",
} as const;

export const BaseTableBody = <TData extends object>({
  isPending,
  isError,
  rows,
  colSpan,
  emptyState,
  isSingleSelection,
}: TBaseTableBodyProps<TData>) => {
  if (isPending) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={colSpan} className="h-24 text-center text-muted-foreground">
            {TABLE_MESSAGES.loading}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (isError) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={colSpan} className="h-24 text-center text-destructive">
            {TABLE_MESSAGES.error}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={colSpan} className="h-24 text-center text-muted-foreground">
            {emptyState ?? TABLE_MESSAGES.empty}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      <BaseTableRow rows={rows} isSingleSelection={isSingleSelection} />
    </TableBody>
  );
};
