import { ProfileCard } from "@entities/profile";
import { ProfileGreeting } from "@features/profile-greeting";

export const ProfilePanel = () => {
  return (
    <section className="space-y-3 rounded-2xl border border-zinc-300 p-4">
      <h3 className="text-base font-medium">Widget: profile panel</h3>
      <ProfileGreeting />
      <ProfileCard name="Widget composition" role="entities + features" />
    </section>
  );
};
