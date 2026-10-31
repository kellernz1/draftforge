import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import type { DraftPhaseStep, TeamDraft } from "../types/Draft";
import { BanSlot } from "./BanSlot";
import { PickSlot } from "./PickSlot";
import { roles } from "../data/roles";

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
  const assignPickRole = useDraftStore((state) => state.assignPickRole);
  const getChampion = (id: string | null) => champions.find((champion) => champion.id === id);
  const pickOrder = draft.pickOrder ?? draft.picks.flatMap((pick) => (pick.championId ? [pick.championId] : []));
  const accent = side === "blue" ? "border-blueTeam/70" : "border-redTeam/70";

  return (
    <aside className={`border bg-[#080808] p-3 transition ${active ? accent : "border-[#292929]"}`}>
      <div className={`mb-3 flex items-center justify-between border-b pb-2 ${side === "blue" ? "border-blueTeam/40" : "border-redTeam/40"}`}>
        <h2 className="font-display text-lg font-bold uppercase tracking-[0.1em] text-white">{title}</h2>
        {active && <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold">Em seleção</span>}
      </div>
      <div className="mb-3 grid grid-cols-5 gap-1">
        {draft.bans.map((championId, index) => (
          <BanSlot key={`${side}-ban-${index}`} champion={getChampion(championId)} />
        ))}
      </div>
      <div className="space-y-2">
        {roles.map((fallbackRole, index) => {
          const championId = pickOrder[index] ?? null;
          const champion = getChampion(championId);
          const assignedRole = draft.picks.find((pick) => pick.championId === championId)?.role ?? fallbackRole;
          const isActiveSlot = active && currentStep?.action === "pick" && index === pickOrder.length;
          return (
            <PickSlot
              key={`${side}-pick-${index}`}
              role={assignedRole}
              slotLabel={`Pick ${index + 1}`}
              champion={champion}
              active={isActiveSlot}
              onInspect={champion ? () => onInspectChampion?.(champion.id) : undefined}
              onRoleChange={champion ? (role) => assignPickRole(side, champion.id, role) : undefined}
            />
          );
        })}
      </div>
    </aside>
  );
};
