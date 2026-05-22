import { useChampionStore } from "../store/useChampionStore";
import type { DraftPhaseStep, TeamDraft } from "../types/Draft";
import { BanSlot } from "./BanSlot";
import { PickSlot } from "./PickSlot";

type TeamPanelProps = {
  title: string;
  side: "blue" | "red";
  draft: TeamDraft;
  active: boolean;
  currentStep?: DraftPhaseStep;
  onInspectChampion?: (championId: string) => void;
};

export const TeamPanel = ({ title, side, draft, active, currentStep, onInspectChampion }: TeamPanelProps) => {
  const champions = useChampionStore((state) => state.champions);
  const getChampion = (id: string | null) => champions.find((champion) => champion.id === id);
  const accent = side === "blue" ? "border-blueTeam shadow-glow" : "border-redTeam shadow-[0_0_30px_rgba(239,68,68,0.14)]";

  return (
    <aside className={`rounded-lg border bg-panel/90 p-4 transition ${active ? accent : "border-line"}`}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
        {active && <span className="rounded bg-gold/15 px-2 py-1 text-xs font-bold text-gold">ATIVO</span>}
      </div>
      <div className="mb-5 grid grid-cols-5 gap-2">
        {draft.bans.map((championId, index) => (
          <BanSlot key={`${side}-ban-${index}`} champion={getChampion(championId)} />
        ))}
      </div>
      <div className="space-y-2">
        {draft.picks.map((pick) => {
          const champion = getChampion(pick.championId);
          const isActiveSlot = active && currentStep?.action === "pick" && currentStep.role === pick.role;
          return (
            <PickSlot
              key={pick.role}
              role={pick.role}
              champion={champion}
              active={isActiveSlot}
              onInspect={champion ? () => onInspectChampion?.(champion.id) : undefined}
            />
          );
        })}
      </div>
    </aside>
  );
};
