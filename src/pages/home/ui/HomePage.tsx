import { TextInput } from "@/shared/ui/Input";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

export const HomePage = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("https://api.github.com/repos/TanStack/query").then((res) => res.json()),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <TextInput
        label="Email"
        type="email"
        placeholder="email@example.com"
        description="Введите email."
        defaultValue={data?.name || "email"}
      />

      <div className="flex flex-col gap-5">
        <Link to="/table">Move to Table page</Link>

        <Link to="/components">Move to Components page</Link>
      </div>
    </main>
  );
};
