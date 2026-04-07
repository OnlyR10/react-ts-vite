import { cn } from "@/shared/lib/cn";

import type { ComponentProps } from "react";

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
