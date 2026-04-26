import React from "react";

import { TableHead, TableHeader, TableRow } from "../../primitives";
import { HeaderCell } from "./HeaderCell";

import type { BaseTableHeaderProps } from "./types";

export const BaseTableHeader = <TData extends object>({
  table,
  enableSorting,
}: BaseTableHeaderProps<TData>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id} className="px-3 py-3.75">
              <HeaderCell header={header} enableSorting={enableSorting} />
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
