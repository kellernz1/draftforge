import type { Champion } from "../types/Champion";

type BanSlotProps = {
  champion?: Champion;
};

export const BanSlot = ({ champion }: BanSlotProps) => (
  <div className="flex h-11 items-center justify-center rounded-md border border-line bg-night/70 px-2 text-xs">
    {champion ? <span className="font-semibold text-red-200">{champion.name}</span> : <span className="text-slate-600">Ban</span>}
  </div>
);
