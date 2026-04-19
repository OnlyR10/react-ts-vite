import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <div>
      <p className="mb-5">Опачки... 404</p>
      <Link to="/">Back to Home page</Link>;
    </div>
  );
};
