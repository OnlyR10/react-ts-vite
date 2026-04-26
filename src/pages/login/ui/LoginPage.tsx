import { Link, useSearch } from "@tanstack/react-router";

// const routeApi = getRouteApi("/login/");

export const LoginPage = () => {
  const { redirect } = useSearch({ from: "/login/" });

  return (
    <div>
      <Link to={redirect}>Возвращение</Link>
    </div>
  );
};
