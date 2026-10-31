import type { Champion } from "../types/Champion";
import { getChampionImageUrl } from "../services/championAssetService";
import { useSettingsStore } from "../store/useSettingsStore";

type ChampionCardProps = {
  champion: Champion;
  available: boolean;
  lockedReason?: string;
  onSelect: (championId: string) => void;
};

const tierClasses: Record<Champion["tier"], string> = {
  S: "border-gold/70 bg-black/80 text-gold",
  A: "border-emerald-700 bg-black/80 text-emerald-400",
  B: "border-blue-800 bg-black/80 text-blue-300",
  C: "border-gray-600 bg-black/80 text-gray-300",
  D: "border-red-800 bg-black/80 text-red-300",
};

export const ChampionCard = ({ champion, available, lockedReason, onSelect }: ChampionCardProps) => {
  const patchVersion = useSettingsStore((state) => state.patchVersion);

  return (
    <button
    type="button"
    onClick={() => available && onSelect(champion.id)}
    disabled={!available}
    className={`cut-corners group relative aspect-[4/5] min-w-0 overflow-hidden border bg-[#090909] text-left transition duration-150 ${
      available
        ? "border-[#333] hover:z-10 hover:border-gold hover:brightness-110"
        : "cursor-not-allowed border-[#222] opacity-30 grayscale"
    }`}
  >
    <img
      src={getChampionImageUrl(champion.name, patchVersion)}
      alt={champion.name}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/10" />
    <div className="absolute inset-x-0 bottom-0 p-2">
      <h3 className="truncate text-[11px] font-bold uppercase tracking-[0.08em] text-white">{champion.name}</h3>
      <p className="mt-0.5 truncate text-[9px] uppercase tracking-wide text-slate-400">{champion.roles.join(" / ")}</p>
    </div>
      <span className={`absolute right-1.5 top-1.5 border px-1.5 py-0.5 text-[9px] font-black ${tierClasses[champion.tier]}`}>
        {champion.tier}
      </span>
    {lockedReason && <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-black/85 px-1 py-1 text-center text-[8px] font-bold uppercase tracking-wider text-red-300">Fearless</span>}
    </button>
  );
};
