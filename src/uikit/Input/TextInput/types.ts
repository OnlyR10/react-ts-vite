import type { ReactNode } from "react";
import type { BaseInputProps } from "../BaseInput";

export type TextInputProps = BaseInputProps & {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  fieldClassName?: string;
};
