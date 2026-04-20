import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
};
