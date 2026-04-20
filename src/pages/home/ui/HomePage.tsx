import { Link } from "@tanstack/react-router";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link to="/table">Move to Table page</Link>

      <Link to="/components">Move to Components page</Link>
    </div>
  );
};
