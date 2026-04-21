import type { TanStackTableProps } from "../types";

export type SelectionFlags = {
  isSingleSelection: boolean;
  isMultipleSelection: boolean;
  selectionEnabled: boolean;
  showSelectionCol: boolean;
};

export const getSelectionFlags = (
  rowSelectionMode: TanStackTableProps["rowSelectionMode"],
  showSelectionColumn: boolean,
): SelectionFlags => {
  const mode = rowSelectionMode ?? "none";
  const isSingleSelection = mode === "single";
  const isMultipleSelection = mode === "multiple";

  return {
    isSingleSelection,
    isMultipleSelection,
    selectionEnabled: mode !== "none",
    showSelectionCol: isMultipleSelection && showSelectionColumn,
  };
};
