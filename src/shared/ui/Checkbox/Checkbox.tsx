import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { useId } from "react";

import { cn } from "@/shared/lib/cn";
import { Field, FieldDescription, FieldLabel } from "@/shared/ui/Field";

import type { CheckboxProps } from "./types";

export const Checkbox = ({
  id,
  name,
  label,
  description,
  checked,
  onCheckedChange,
  isInvalid,
  isDisabled,
}: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const checkboxRootClassName = cn(
    "peer mt-0.5 grid size-4 shrink-0 place-items-center rounded-sm",
    "border border-input bg-input outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
    "data-[state=checked]:text-primary-foreground",
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
        name={name}
        checked={checked}
        disabled={isDisabled}
        onCheckedChange={onCheckedChange}
        data-slot="checkbox"
        aria-invalid={isInvalid}
        className={checkboxRootClassName}
      >
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
          <CheckIcon className="size-3.5" />
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
