import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableCell = ({ className, ...props }: ComponentProps<"td">) => {
  return (
    <td
      data-slot="table-cell"
      className={cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  );
};
