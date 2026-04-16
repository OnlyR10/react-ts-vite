import { Link } from "@tanstack/react-router";

export const AboutPage = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="p-2">Hello from About!</div>

      <Link to="/">Back to Home page</Link>
    </div>
  );
};
