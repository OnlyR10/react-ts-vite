import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => {
  return <tfoot data-slot="table-footer" className={cn(className)} {...props} />;
};
