import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableRow = ({ className, ...props }: ComponentProps<"tr">) => {
  return <tr data-slot="table-row" className={cn(className)} {...props} />;
};
