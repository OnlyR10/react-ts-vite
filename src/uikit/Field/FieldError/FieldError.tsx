import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const FieldError = ({ className, children, ...props }: ComponentProps<"div">) => {
  if (!children) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-sm font-normal text-destructive", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { FieldError };
