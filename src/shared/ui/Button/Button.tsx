import { type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "../../lib/cn";
import { buttonVariants } from "./buttonVariants";

type ButtonProps = Omit<React.ComponentProps<"button">, "className" | "aria-invalid"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    isIconOnly?: boolean;
    isInvalid?: boolean;
    asChild?: boolean;
    "aria-invalid"?: React.AriaAttributes["aria-invalid"];
  };

export const Button = ({
  className,
  variant = "default",
  size = "default",
  isIconOnly = false,
  isInvalid = false,
  asChild = false,
  "aria-invalid": ariaInvalidProp,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : "button";
  const ariaInvalid = ariaInvalidProp ?? isInvalid;

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-icon-only={isIconOnly}
      aria-invalid={ariaInvalid}
      className={cn(buttonVariants({ variant, size, isIconOnly, className }))}
      {...props}
    />
  );
};
