import { ProfileGreeting } from "@/features";
import { FirstIcon } from "@shared/ui/icons";

type ProfileCardProps = {
  name: string;
  role: string;
};

export const ProfileCard = ({ name, role }: ProfileCardProps) => {
  return (
    <article className="rounded-xl border border-zinc-200 p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <FirstIcon />
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
      <p className="text-sm text-zinc-600">{role}</p>
      <ProfileGreeting />
    </article>
  );
};
