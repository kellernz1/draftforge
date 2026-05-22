import type { Champion } from "../types/Champion";

type ChampionCardProps = {
  champion: Champion;
  available: boolean;
  lockedReason?: string;
  onSelect: (championId: string) => void;
};

const tierClasses: Record<Champion["tier"], string> = {
  S: "bg-gold/20 text-gold border-gold/60",
  A: "bg-emerald-500/15 text-emerald-400 border-emerald-500/50",
  B: "bg-blueTeam/15 text-blue-300 border-blueTeam/50",
  C: "bg-gray-500/15 text-gray-300 border-gray-500/50",
  D: "bg-redTeam/15 text-red-300 border-redTeam/50",
};

export const ChampionCard = ({ champion, available, lockedReason, onSelect }: ChampionCardProps) => (
  <button
    type="button"
    onClick={() => available && onSelect(champion.id)}
    disabled={!available}
    className={`group min-h-28 rounded-lg border border-line bg-panel p-3 text-left transition duration-200 ${
      available
        ? "hover:-translate-y-0.5 hover:border-blueTeam hover:shadow-glow"
        : "cursor-not-allowed opacity-40 grayscale"
    }`}
  >
    <div className="flex items-start justify-between gap-2">
      <div>
        <h3 className="font-display text-lg font-bold text-white">{champion.name}</h3>
        <p className="mt-1 text-xs text-slate-400">{champion.roles.join(" / ")}</p>
      </div>
      <span className={`rounded border px-2 py-1 text-xs font-black ${tierClasses[champion.tier]}`}>
        {champion.tier}
      </span>
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {champion.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
          {tag}
        </span>
      ))}
    </div>
    {lockedReason && <p className="mt-2 text-[11px] font-semibold text-red-300">{lockedReason}</p>}
  </button>
);
