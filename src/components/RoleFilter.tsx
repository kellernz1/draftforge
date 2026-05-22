import { roles } from "../data/roles";
import type { Role } from "../types/Champion";

type RoleFilterProps = {
  value: Role | "All";
  onChange: (role: Role | "All") => void;
};

export const RoleFilter = ({ value, onChange }: RoleFilterProps) => (
  <div className="flex flex-wrap gap-2">
    {(["All", ...roles] as const).map((role) => (
      <button
        key={role}
        type="button"
        onClick={() => onChange(role)}
        className={`rounded-md border px-3 py-2 text-xs font-bold uppercase tracking-wide transition ${
          value === role
            ? "border-gold bg-gold/15 text-gold"
            : "border-line bg-panel text-slate-300 hover:border-blueTeam hover:text-white"
        }`}
      >
        {role}
      </button>
    ))}
  </div>
);
