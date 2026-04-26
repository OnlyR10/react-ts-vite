import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => {
  return <tbody data-slot="table-body" className={cn(className)} {...props} />;
};
