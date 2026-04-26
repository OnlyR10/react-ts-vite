import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => {
  return <caption data-slot="table-caption" className={cn(className)} {...props} />;
};
