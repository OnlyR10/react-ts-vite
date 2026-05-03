import { ArrowRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { TextInput } from "@/shared/ui/Input";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

type ButtonDemoProps = Pick<React.ComponentProps<typeof Button>, "size" | "variant">;

type ButtonDemoSection = {
  title: string;
  props: ButtonDemoProps;
};

const buttonDemoSections: ButtonDemoSection[] = [
  { title: "Default size default variant", props: {} },
  { title: "XS size default variant", props: { size: "xs" } },
  { title: "SM size default variant", props: { size: "sm" } },
  { title: "LG size default variant", props: { size: "lg" } },
  { title: "Default size secondary variant", props: { variant: "secondary" } },
  { title: "Default size destructive variant", props: { variant: "destructive" } },
  { title: "Default size outline variant", props: { variant: "outline" } },
  { title: "Default size ghost variant", props: { variant: "ghost" } },
  { title: "Default size link variant", props: { variant: "link" } },
];

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
        {buttonDemoSections.map(({ title, props }) => (
          <div className="flex flex-col gap-2" key={title}>
            <h3 className="text-lg font-bold">{title}:</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button {...props}>Default</Button>
              <Button disabled {...props}>
                Default
              </Button>
              <Button isInvalid {...props}>
                Default
              </Button>
              <Button {...props}>
                Default
                <ArrowRight />
              </Button>
              <Button {...props}>
                <ArrowRight />
                Default
              </Button>
              <Button isIconOnly aria-label={`${title.toLowerCase()} icon button`} {...props}>
                <ArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/"> Back to Home page </Link>
    </main>
  );
};
