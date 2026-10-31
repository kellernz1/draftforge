import { roles } from "../data/roles";
import type { Role } from "../types/Champion";

type RoleFilterProps = {
  value: Role | "All";
  onChange: (role: Role | "All") => void;
};

export const RoleFilter = ({ value, onChange }: RoleFilterProps) => (
  <div className="flex flex-wrap gap-1">
    {(["All", ...roles] as const).map((role) => (
      <button
        key={role}
        type="button"
        onClick={() => onChange(role)}
        className={`border px-2.5 py-2 text-[9px] font-bold uppercase tracking-[0.12em] transition ${
          value === role
            ? "border-gold bg-gold/10 text-gold"
            : "border-[#333] bg-[#0b0b0b] text-slate-500 hover:border-slate-500 hover:text-white"
        }`}
      >
        {role}
      </button>
    ))}
  </div>
);
