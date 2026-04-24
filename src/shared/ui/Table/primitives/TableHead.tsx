import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableHead = ({ className, ...props }: ComponentProps<"th">) => {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
};
