import { HomePage } from "@/pages/home";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });
