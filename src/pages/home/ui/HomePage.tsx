import { ProfileCard } from "@entities/profile";
import { ProfileGreeting } from "@features/profile-greeting";
import { ProfilePanel } from "@widgets/profile-panel";

export const HomePage = () => {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">FSD Layer Playground</h1>
      <ProfilePanel />
      <ProfileGreeting />
      <ProfileCard name="Page level usage" role="direct entities import" />
    </main>
  );
};
