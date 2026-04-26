import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export type TableProps = ComponentProps<"table"> & {
  containerClassName?: string;
};

export const Table = ({ className, containerClassName, children, ...props }: TableProps) => {
  return (
    <div data-slot="table-container" className={cn(containerClassName)}>
      <table data-slot="table" className={cn(className)} {...props}>
        {children}
      </table>
    </div>
  );
};
