import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const FieldDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    data-slot="field-description"
    className={cn("text-sm leading-normal font-normal text-muted-foreground", className)}
    {...props}
  />
);

export { FieldDescription };
