import { useUsersQuery } from "@/entities/users";
import { getUserRowId, userColumns } from "@/pages/table/model";
import { TanStackTable } from "@/shared/ui/Table";
import { Link } from "@tanstack/react-router";

export const Table = () => {
  const { data = [], isPending, isError } = useUsersQuery();

  return (
    <div className="flex max-w-4xl flex-col gap-6 p-6">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium">Выбор единичный строки</div>
          <TanStackTable
            data={data}
            columns={userColumns}
            rowSelectionMode="single"
            getRowId={getUserRowId}
            isPending={isPending}
            isError={isError}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium">Мультивыбор с чекбоксами</div>
          <TanStackTable
            data={data}
            columns={userColumns}
            rowSelectionMode="multiple"
            getRowId={getUserRowId}
            isPending={isPending}
            isError={isError}
            emptyState="Нет данных"
          />
        </div>
      </div>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};
