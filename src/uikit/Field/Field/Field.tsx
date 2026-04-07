import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Field = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    role="group"
    data-slot="field"
    className={cn(
      "group/field flex w-full flex-col gap-2 data-[invalid=true]:text-destructive",
      className,
    )}
    {...props}
  />
);

export { Field };
