import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { useId } from "react";

import { cn } from "@/shared/lib/cn";
import { Field, FieldDescription, FieldLabel } from "@/shared/ui/Field";

import type { CheckboxProps } from "./types";

export const Checkbox = ({
  id,
  label,
  description,
  checked,
  isInvalid,
  isDisabled,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const isIndeterminate = checked === "indeterminate";

  const checkboxRootClassName = cn(
    "peer grid size-4 shrink-0 place-items-center rounded-sm",
    "border border-input bg-input outline-none",
    "motion-safe:transition-[background-color,border-color,box-shadow] motion-safe:duration-150 motion-safe:ease-out",
    "disabled:cursor-not-allowed disabled:opacity-50",
    // checked
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
    "data-[state=checked]:text-primary-foreground",
    // indeterminate
    "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
    "data-[state=indeterminate]:text-primary-foreground",
    isInvalid &&
      "border-destructive ring-3 ring-destructive/20 data-[state=checked]:border-destructive",
  );

  return (
    <Field
      data-invalid={isInvalid}
      data-disabled={isDisabled}
      className={cn("flex flex-row items-start gap-3")}
    >
      <CheckboxPrimitive.Root
        id={checkboxId}
        checked={checked}
        disabled={isDisabled}
        data-slot="checkbox"
        aria-invalid={isInvalid}
        className={checkboxRootClassName}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className={cn(
            "grid place-content-center text-current [&>svg]:size-3.5",
            "motion-safe:transition-[opacity,transform] motion-safe:duration-150 motion-safe:ease-out",
            "data-[state=unchecked]:scale-75 data-[state=unchecked]:opacity-0",
            "data-[state=checked]:scale-100 data-[state=checked]:opacity-100",
            "data-[state=indeterminate]:scale-100 data-[state=indeterminate]:opacity-100",
          )}
        >
          {isIndeterminate ? <MinusIcon /> : <CheckIcon />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <div className="flex flex-col gap-1">
          <FieldLabel htmlFor={checkboxId} className="font-medium">
            {label}
          </FieldLabel>
          {description ? (
            <FieldDescription className="font-normal">{description}</FieldDescription>
          ) : null}
        </div>
      )}
    </Field>
  );
};
