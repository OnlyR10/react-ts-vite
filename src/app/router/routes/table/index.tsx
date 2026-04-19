import { Table } from "@/pages/table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/table/")({
  component: Table,
});
