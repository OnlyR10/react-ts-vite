import { TextInput } from "@/shared/ui/Input";
import { queryOptions, useQuery, useQueryClient } from "@tanstack/react-query";

export const HomePage = () => {
  const { data, error } = useQuery({
    notifyOnChangeProps: () => {
      return ["data"];
    },
    queryKey: ["repoData"],
    queryFn: () => fetch("https://api.github.com/repos/TanStack/query").then((res) => res.json()),
  });
  // console.log("🚀 ~ App ~ data:", data?.name);

  function groupOptions() {
    return queryOptions({
      queryKey: ["groups"],
      queryFn: () => ({ an: 2 }),
      staleTime: 5 * 1000,
    });
  }

  const queryClient = useQueryClient();

  const datas = queryClient.getQueryData(groupOptions().queryKey);

  return (
    <main className="mx-auto max-w-md p-6">
      <TextInput
        label="Email"
        type="email"
        placeholder="email@example.com"
        description="Введите email."
      />

      {data}
    </main>
  );
};
