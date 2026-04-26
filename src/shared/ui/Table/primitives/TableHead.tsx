import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableHead = ({ className, ...props }: ComponentProps<"th">) => {
  return <th data-slot="table-head" className={cn(className)} {...props} />;
};
