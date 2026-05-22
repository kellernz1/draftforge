import type { Champion, Role } from "../types/Champion";

type PickSlotProps = {
  role: Role;
  champion?: Champion;
  active?: boolean;
  onInspect?: () => void;
};

export const PickSlot = ({ role, champion, active, onInspect }: PickSlotProps) => (
  <button
    type="button"
    onMouseEnter={onInspect}
    onClick={onInspect}
    className={`flex min-h-16 w-full items-center justify-between rounded-md border px-3 text-left transition ${
      active ? "border-gold bg-gold/10" : "border-line bg-night/70 hover:border-slate-500"
    }`}
  >
    <div>
      <p className="text-[11px] font-bold uppercase text-slate-500">{role}</p>
      <p className="font-display text-lg font-bold text-white">{champion?.name ?? "Aguardando"}</p>
    </div>
    {champion && <span className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300">{champion.tier}</span>}
  </button>
);
