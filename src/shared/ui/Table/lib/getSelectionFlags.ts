import type { TanStackTableProps } from "../types";

type SelectionFlags = {
  isSingleSelection: boolean;
  isMultipleSelection: boolean;
  selectionEnabled: boolean;
};

export const getSelectionFlags = (
  rowSelectionMode: TanStackTableProps["rowSelectionMode"],
): SelectionFlags => {
  const mode = rowSelectionMode ?? "none";

  return {
    isSingleSelection: mode === "single",
    isMultipleSelection: mode === "multiple",
    selectionEnabled: mode !== "none",
  };
};
