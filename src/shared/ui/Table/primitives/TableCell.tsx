import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableCell = ({ className, ...props }: ComponentProps<"td">) => {
  return <td data-slot="table-cell" className={cn(className)} {...props} />;
};
