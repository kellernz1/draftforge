import { useMemo } from "react";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import { analyzeTeam } from "../services/analysisService";
import type { TeamAnalysis } from "../types/Analysis";

const labels: Record<keyof TeamAnalysis, string> = {
  damageBalance: "Dano",
  frontline: "Frontline",
  engage: "Engage",
  peel: "Peel",
  crowdControl: "CC",
  scaling: "Scaling",
  earlyGame: "Early",
  waveClear: "Wave clear",
};

const TeamBars = ({ title, analysis, color }: { title: string; analysis: TeamAnalysis; color: string }) => (
  <div>
    <h3 className="mb-3 font-display text-xl font-bold text-white">{title}</h3>
    <div className="space-y-2">
      {(Object.keys(labels) as (keyof TeamAnalysis)[]).map((key) => (
        <div key={key} className="grid grid-cols-[82px_1fr_36px] items-center gap-2 text-xs">
          <span className="text-slate-400">{labels[key]}</span>
          <div className="h-2 overflow-hidden rounded bg-slate-800">
            <div className={`h-full rounded ${color}`} style={{ width: `${analysis[key]}%` }} />
          </div>
          <span className="text-right font-semibold text-slate-300">{analysis[key]}</span>
        </div>
      ))}
    </div>
  </div>
);

const feedback = (team: string, analysis: TeamAnalysis) => {
  if (analysis.frontline < 40) {
    return `${team} tem pouco frontline. Considere um tanque.`;
  }
  if (analysis.engage < 40) {
    return `${team} precisa de uma forma mais clara de iniciar lutas.`;
  }
  if (analysis.peel < 35) {
    return `${team} pode ter dificuldade para proteger os carries.`;
  }
  if (analysis.damageBalance < 80) {
    return `${team} está previsível no tipo de dano.`;
  }
  return `${team} apresenta uma composição equilibrada.`;
};

export const AnalysisPanel = () => {
  const champions = useChampionStore((state) => state.champions);
  const blueTeam = useDraftStore((state) => state.blueTeam);
  const redTeam = useDraftStore((state) => state.redTeam);

  const { blueAnalysis, redAnalysis } = useMemo(() => {
    const getPicks = (ids: (string | null)[]) =>
      ids
        .map((id) => champions.find((champion) => champion.id === id))
        .filter((champion): champion is NonNullable<typeof champion> => Boolean(champion));

    return {
      blueAnalysis: analyzeTeam(getPicks(blueTeam.picks.map((pick) => pick.championId))),
      redAnalysis: analyzeTeam(getPicks(redTeam.picks.map((pick) => pick.championId))),
    };
  }, [blueTeam.picks, champions, redTeam.picks]);

  return (
    <section className="rounded-lg border border-line bg-panel/90 p-4">
      <div className="grid gap-6 xl:grid-cols-2">
        <TeamBars title="Blue Analysis" analysis={blueAnalysis} color="bg-blueTeam" />
        <TeamBars title="Red Analysis" analysis={redAnalysis} color="bg-redTeam" />
      </div>
      <div className="mt-4 grid gap-2 text-sm text-slate-300 xl:grid-cols-2">
        <p>{feedback("Blue team", blueAnalysis)}</p>
        <p>{feedback("Red team", redAnalysis)}</p>
      </div>
    </section>
  );
};
