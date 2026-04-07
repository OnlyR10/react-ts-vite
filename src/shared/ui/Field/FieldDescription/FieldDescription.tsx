import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

const FieldDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    data-slot="field-description"
    className={cn("text-sm leading-normal font-normal text-muted-foreground", className)}
    {...props}
  />
);

export { FieldDescription };
