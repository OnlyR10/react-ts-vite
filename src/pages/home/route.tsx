import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "./ui/HomePage";

export const Route = createFileRoute("/home")({
  component: HomePage,
});
