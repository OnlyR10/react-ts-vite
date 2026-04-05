import { ProfileCard } from "@entities/profile";

export const ProfileGreeting = () => {
  return (
    <section className="space-y-2">
      <p className="text-sm text-zinc-500">Feature: profile greeting</p>
      <ProfileCard name="Frontend Engineer" role="FSD playground" />
    </section>
  );
};
