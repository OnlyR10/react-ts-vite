import { Checkbox } from "@/shared/ui/Checkbox";
import { TextInput } from "@/shared/ui/Input";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

export const Components = () => {
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
    <main className=" flex  flex-col gap-8">
      <div className=" flex gap-8 ">
        <TextInput
          label="Name"
          type="text"
          placeholder="Name"
          description="Введите name."
          defaultValue={data?.name || "name"}
        />

        <Checkbox
          id="testCheckbox"
          name="testCheckbox"
          label="Заголовок"
          description="Текст описание дополнительный."
        />
      </div>
      <Link to="/">Back to Home page</Link>
    </main>
  );
};
