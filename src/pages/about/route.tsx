import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "./ui/AboutPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
