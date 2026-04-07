import { cn } from "@/shared/lib/cn";

import { Label } from "../../Label";

import type { ComponentProps } from "react";

const FieldLabel = ({ className, ...props }: ComponentProps<typeof Label>) => (
  <Label
    data-slot="field-label"
    className={cn(
      "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
      className,
    )}
    {...props}
  />
);

export { FieldLabel };
