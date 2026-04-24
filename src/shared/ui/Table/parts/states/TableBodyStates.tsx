import { TableCell, TableRow } from "../../primitives";

import type { ReactNode } from "react";

const TABLE_MESSAGES = {
  loading: "Загрузка данных...",
  error: "Ошибка загрузки данных",
  empty: "Нет данных.",
} as const;

type TableBodyStatesProps = {
  isPending: boolean;
  isError: boolean;
  isEmpty: boolean;
  colSpan: number;
  emptyState?: ReactNode;
};

export const TableBodyStates = ({
  isPending,
  isError,
  isEmpty,
  colSpan,
  emptyState,
}: TableBodyStatesProps) => {
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

  if (isEmpty) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan} className="h-24 text-center text-muted-foreground">
          {emptyState ?? TABLE_MESSAGES.empty}
        </TableCell>
      </TableRow>
    );
  }

  return null;
};
