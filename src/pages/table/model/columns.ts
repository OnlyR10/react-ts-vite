import type { User } from "@/entities/users";
import type { TanStackGetRowId } from "@/shared/ui/Table";
import type { ColumnDef } from "@tanstack/react-table";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

export const getUserRowId: TanStackGetRowId<User> = (row) => row.id.toString();
