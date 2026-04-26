import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

export const TableHeader = ({ className, ...props }: ComponentProps<"thead">) => {
  return <thead data-slot="table-header" className={cn(className)} {...props} />;
};
