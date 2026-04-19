import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <div>
      <h1>RootLayout</h1>

      <Outlet />
    </div>
  );
};
