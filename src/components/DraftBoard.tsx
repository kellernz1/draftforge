import { useState } from "react";
import { AnalysisPanel } from "./AnalysisPanel";
import { ChampionGrid } from "./ChampionGrid";
import { CounterPickPanel } from "./CounterPickPanel";
import { RecommendationPanel } from "./RecommendationPanel";
import { TeamPanel } from "./TeamPanel";
import { DraftTimer } from "./DraftTimer";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";

export const DraftBoard = () => {
  const draft = useDraftStore();
  const champions = useChampionStore((state) => state.champions);
  const [inspectedChampionId, setInspectedChampionId] = useState<string | undefined>();
  const currentStep = draft.order[draft.stepIndex];
  const activeLabel = currentStep
    ? `${currentStep.team === "blue" ? "Blue" : "Red"} ${currentStep.action === "ban" ? "ban" : "pick"}`
    : "Draft completo";
  const championName = (championId: string) => champions.find((champion) => champion.id === championId)?.name ?? championId;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 border border-[#292929] bg-[#090909] px-4 py-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-gold">
            {draft.mode === "fearless" ? `Fearless · Jogo ${draft.currentGame}` : "Normal"} · Fase {draft.phase}
          </p>
          <h1 className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white">Draft em andamento</h1>
          {draft.mode === "fearless" && (
            <p className="mt-1 text-sm text-slate-400">
              {draft.fearlessLockedChampionIds.length} campeoes bloqueados por partidas anteriores
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DraftTimer key={draft.stepIndex} complete={draft.phase === "complete"} />
          <span className="border-l border-[#333] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
            {Math.min(draft.stepIndex + 1, draft.order.length)} / {draft.order.length} · {activeLabel}
          </span>
          <button type="button" onClick={draft.undoLastStep} className="button-secondary">
            Desfazer
          </button>
        </div>
      </div>

      {draft.mode === "fearless" && draft.fearlessHistory.length > 0 && (
        <section className="border border-[#292929] bg-[#080808] p-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white">Histórico Fearless</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {draft.fearlessHistory.map((record) => (
              <article key={record.gameNumber} className="border-l-2 border-gold/50 bg-[#0e0e0e] p-3 text-sm">
                <h3 className="font-bold text-gold">Partida {record.gameNumber}</h3>
                <p className="mt-2 text-slate-300">Blue: {record.bluePicks.map(championName).join(", ")}</p>
                <p className="mt-1 text-slate-300">Red: {record.redPicks.map(championName).join(", ")}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-3 xl:grid-cols-[292px_minmax(0,1fr)_292px]">
        <TeamPanel
          title="Blue Team"
          side="blue"
          draft={draft.blueTeam}
          active={currentStep?.team === "blue"}
          currentStep={currentStep}
          onInspectChampion={setInspectedChampionId}
        />
        <ChampionGrid />
        <TeamPanel
          title="Red Team"
          side="red"
          draft={draft.redTeam}
          active={currentStep?.team === "red"}
          currentStep={currentStep}
          onInspectChampion={setInspectedChampionId}
        />
      </div>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)_minmax(280px,0.8fr)]">
        <AnalysisPanel />
        <RecommendationPanel />
        <CounterPickPanel inspectedChampionId={inspectedChampionId} />
      </div>
    </div>
  );
};
