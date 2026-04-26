import { LoginPage } from "@/pages/login";
import { createFileRoute } from "@tanstack/react-router";

type LoginSearch = {
  redirect?: string; // может быть undefined, если параметра нет
};

export const Route = createFileRoute("/login/")({
  component: LoginPage,
  validateSearch: (search: Record<string, unknown>): LoginSearch => {
    return {
      redirect: typeof search.redirect === "string" ? search.redirect : undefined,
    };
  },
});
