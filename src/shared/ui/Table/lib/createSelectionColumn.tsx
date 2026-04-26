import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";

import type { ColumnDef } from "@tanstack/react-table";

export const createSelectionColumn = <TData extends object>(): ColumnDef<TData, unknown> => ({
  id: "select",
  header: ({ table }) => {
    const allSelected = table.getIsAllPageRowsSelected();
    const someSelected = table.getIsSomePageRowsSelected();
    return (
      <Checkbox
        checked={allSelected ? true : someSelected ? "indeterminate" : false}
        onCheckedChange={(checked) => table.toggleAllPageRowsSelected(Boolean(checked))}
        aria-label="header checkbox"
      />
    );
  },
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(checked) => {
        row.toggleSelected(Boolean(checked));
      }}
      isDisabled={!row.getCanSelect()}
      aria-label={`Select row ${row.id}`}
    />
  ),
  enableSorting: false,
  enableHiding: false,
});
