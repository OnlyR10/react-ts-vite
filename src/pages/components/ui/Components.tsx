import { ArrowRight, Plus, Settings } from "lucide-react";

import { Button } from "@/shared/ui/Button";
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
    <main className="flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-2">
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

        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Plus aria-hidden="true" className="size-4" data-icon="inline-start" />
            Create
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight aria-hidden="true" className="size-4" data-icon="inline-end" />
          </Button>
          <Button aria-label="Add item" size="icon">
            <Plus aria-hidden="true" className="size-4" />
          </Button>
          <Button aria-label="Settings" size="icon-sm" variant="secondary">
            <Settings aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>

      <Link to="/"> Back to Home page </Link>
    </main>
  );
};
