import { TextInput } from "@/uikit";

export const HomePage = () => {
  return (
    <main className="mx-auto max-w-md p-6">
      <TextInput
        label="Email"
        type="email"
        placeholder="email@example.com"
        description="Введите email."
      />
    </main>
  );
};
