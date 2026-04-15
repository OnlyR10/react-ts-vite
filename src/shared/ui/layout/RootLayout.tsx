import { Outlet } from "@tanstack/react-router";

export function RootLayout() {
  return (
    <div>
      <h1>RootLayout</h1>

      <Outlet />
    </div>
  );
}
