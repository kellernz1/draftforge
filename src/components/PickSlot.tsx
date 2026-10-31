import type { Champion, Role } from "../types/Champion";
import { roles } from "../data/roles";
import { getChampionImageUrl } from "../services/championAssetService";
import { useSettingsStore } from "../store/useSettingsStore";

type PickSlotProps = {
  role: Role;
  slotLabel: string;
  champion?: Champion;
  active?: boolean;
  onInspect?: () => void;
  onRoleChange?: (role: Role) => void;
};

export const PickSlot = ({ role, slotLabel, champion, active, onInspect, onRoleChange }: PickSlotProps) => {
  const patchVersion = useSettingsStore((state) => state.patchVersion);
  return (
  <div
    role="button"
    tabIndex={0}
    onMouseEnter={onInspect}
    onClick={onInspect}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") onInspect?.();
    }}
    className={`relative flex min-h-[72px] w-full items-center justify-between overflow-hidden border px-3 text-left transition ${
      active ? "border-gold bg-gold/5" : "border-[#2d2d2d] bg-[#0b0b0b] hover:border-[#555]"
    }`}
  >
    {champion && <img src={getChampionImageUrl(champion.name, patchVersion)} alt="" className="absolute inset-y-0 right-0 h-full w-32 object-cover opacity-55" />}
    {champion && <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/85 to-transparent" />}
    <div className="relative">
      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">{slotLabel}</p>
      <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-white">{champion?.name ?? "Aguardando"}</p>
    </div>
    {champion && (
      <select
        aria-label={`Posição de ${champion.name}`}
        value={role}
        onClick={(event) => event.stopPropagation()}
        onChange={(event) => onRoleChange?.(event.target.value as Role)}
        className="relative border border-[#444] bg-black/90 px-2 py-1 text-[10px] uppercase text-slate-300"
      >
        {roles.map((option) => <option key={option}>{option}</option>)}
      </select>
    )}
  </div>
  );
};
