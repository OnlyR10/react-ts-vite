import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export type TableProps = ComponentProps<"table"> & {
  containerClassName?: string;
};

export const Table = ({ className, containerClassName, children, ...props }: TableProps) => {
  return (
    <div
      data-slot="table-container"
      className={cn("relative w-full overflow-x-auto", containerClassName)}
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};
