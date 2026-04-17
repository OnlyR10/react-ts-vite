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

      <Link to="/about" className="mt-30">
        Move to About page
      </Link>
    </main>
  );
};
