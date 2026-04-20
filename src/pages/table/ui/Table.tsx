import { TanStackTable } from "@/shared/ui/Table";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

import type { ColumnDef } from "@tanstack/react-table";

type UserRow = {
  id: number;
  name: string;
  email: string;
  username: string;
};

const columns: ColumnDef<UserRow>[] = [
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

const getUsers = async (): Promise<UserRow[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");

  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  return response.json();
};

export const Table = () => {
  const {
    data = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isPending) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-4 p-6">
        <span>Loading users...</span>
        <Link to="/">Back to Home page</Link>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-4 p-6">
        <span>Error: {error.message}</span>
        <Link to="/">Back to Home page</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-6">
      <TanStackTable data={data} columns={columns} />
      <Link to="/">Back to Home page</Link>
    </div>
  );
};
