import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};
