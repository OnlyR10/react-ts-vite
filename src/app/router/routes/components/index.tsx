import { Components } from "@/pages/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components/")({
  component: Components,
});
