import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { QueryDevtools, RouterDevtools } from "../devtools";
import { router } from "../router/router";
import { queryClient } from "./queryClient";

export const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {import.meta.env.DEV && (
        <>
          <QueryDevtools />
          <RouterDevtools />
        </>
      )}
    </QueryClientProvider>
  );
};
