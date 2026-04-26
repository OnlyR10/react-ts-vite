import { Checkbox as CheckboxPrimitive } from "radix-ui";

import type { ComponentProps, ReactNode } from "react";

type CheckboxPrimitiveProps = ComponentProps<typeof CheckboxPrimitive.Root>;

export type CheckboxProps = {
  id?: string;
  name?: string;
  label?: ReactNode;
  description?: ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  checked?: CheckboxPrimitiveProps["checked"];
  onCheckedChange?: CheckboxPrimitiveProps["onCheckedChange"];
};
