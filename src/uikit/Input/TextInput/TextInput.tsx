import { useId } from "react";

import { Field, FieldDescription, FieldError, FieldLabel } from "../../Field";
import { BaseInput } from "../BaseInput";
import type { TextInputProps } from "./types";

const TextInput = ({
  id,
  label,
  description,
  error,
  fieldClassName,
  className,
  ...props
}: TextInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <Field className={fieldClassName} data-invalid={error ? true : undefined}>
      {label ? <FieldLabel htmlFor={inputId}>{label}</FieldLabel> : null}

      <BaseInput
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={className}
        {...props}
      />

      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};

export { TextInput };
