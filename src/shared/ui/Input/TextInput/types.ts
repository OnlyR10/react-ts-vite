import type { BaseInputProps } from "../BaseInput";
import type { ReactNode } from "react";

export type TextInputProps = BaseInputProps & {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  fieldClassName?: string;
};
