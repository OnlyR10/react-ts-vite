import { NotFound } from "@/pages/404";
import { RootLayout } from "@/shared/ui/Layout/RootLayout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
