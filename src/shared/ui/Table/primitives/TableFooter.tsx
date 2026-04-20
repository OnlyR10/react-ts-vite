import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("border-t bg-muted/50 font-medium [&>tr:last-child]:border-b-0", className)}
      {...props}
    />
  );
};
