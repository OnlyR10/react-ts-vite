import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { router } from "../router/router";

export const RouterDevtools = () => {
  return <TanStackRouterDevtools initialIsOpen={false} router={router} />;
};
