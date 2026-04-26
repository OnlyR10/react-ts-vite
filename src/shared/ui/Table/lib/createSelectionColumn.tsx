import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";

import type { ColumnDef } from "@tanstack/react-table";

export const createSelectionColumn = <TData extends object>(): ColumnDef<TData, unknown> => ({
  id: "select",
  header: () => null,
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
