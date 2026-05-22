import { useState } from "react";
import { AnalysisPanel } from "./AnalysisPanel";
import { ChampionGrid } from "./ChampionGrid";
import { CounterPickPanel } from "./CounterPickPanel";
import { RecommendationPanel } from "./RecommendationPanel";
import { TeamPanel } from "./TeamPanel";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";

export const DraftBoard = () => {
  const draft = useDraftStore();
  const champions = useChampionStore((state) => state.champions);
  const [inspectedChampionId, setInspectedChampionId] = useState<string | undefined>();
  const currentStep = draft.order[draft.stepIndex];
  const activeLabel = currentStep
    ? `${currentStep.team === "blue" ? "Blue" : "Red"} ${currentStep.action === "ban" ? "ban" : `pick ${currentStep.role}`}`
    : "Draft completo";
  const championName = (championId: string) => champions.find((champion) => champion.id === championId)?.name ?? championId;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-panel/90 p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {draft.mode === "fearless" ? `Fearless · Jogo ${draft.currentGame}` : "Normal"} · Fase {draft.phase}
          </p>
          <h1 className="font-display text-4xl font-bold text-white">DraftForge</h1>
          {draft.mode === "fearless" && (
            <p className="mt-1 text-sm text-slate-400">
              {draft.fearlessLockedChampionIds.length} campeoes bloqueados por partidas anteriores
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-line bg-night px-4 py-2 font-semibold text-slate-200">
            Step {Math.min(draft.stepIndex + 1, draft.order.length)} / {draft.order.length}: {activeLabel}
          </span>
          <button type="button" onClick={draft.undoLastStep} className="rounded-md border border-line px-4 py-2 font-bold text-slate-200">
            Desfazer
          </button>
        </div>
      </div>

      {draft.mode === "fearless" && draft.fearlessHistory.length > 0 && (
        <section className="rounded-lg border border-line bg-panel/90 p-4">
          <h2 className="font-display text-xl font-bold text-white">Historico Fearless</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {draft.fearlessHistory.map((record) => (
              <article key={record.gameNumber} className="rounded-md border border-line bg-night/60 p-3 text-sm">
                <h3 className="font-bold text-gold">Partida {record.gameNumber}</h3>
                <p className="mt-2 text-slate-300">Blue: {record.bluePicks.map(championName).join(", ")}</p>
                <p className="mt-1 text-slate-300">Red: {record.redPicks.map(championName).join(", ")}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-5 xl:grid-cols-[300px_minmax(0,1fr)_300px]">
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

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)_minmax(280px,0.8fr)]">
        <AnalysisPanel />
        <RecommendationPanel />
        <CounterPickPanel inspectedChampionId={inspectedChampionId} />
      </div>
    </div>
  );
};
