import { useMemo } from "react";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import { getRecommendations } from "../services/recommendationService";
import { useSettingsStore } from "../store/useSettingsStore";

export const RecommendationPanel = () => {
  const champions = useChampionStore((state) => state.champions);
  const patchVersion = useSettingsStore((state) => state.patchVersion);
  const draft = useDraftStore();
  const currentStep = draft.order[draft.stepIndex];
  const available = champions.filter((champion) => draft.isChampionAvailable(champion.id));

  const recommendations = useMemo(() => {
    if (!currentStep || currentStep.action !== "pick") {
      return [];
    }

    const allyDraft = currentStep.team === "blue" ? draft.blueTeam : draft.redTeam;
    const enemyDraft = currentStep.team === "blue" ? draft.redTeam : draft.blueTeam;
    const roleNeeded = draft.focusedRole === "All"
      ? (allyDraft.picks.find((pick) => !pick.championId)?.role ?? "Top")
      : draft.focusedRole;
    const toChampions = (ids: (string | null)[]) =>
      ids
        .map((id) => champions.find((champion) => champion.id === id))
        .filter((champion): champion is NonNullable<typeof champion> => Boolean(champion));

    return getRecommendations(
      toChampions(allyDraft.picks.map((pick) => pick.championId)),
      toChampions(enemyDraft.picks.map((pick) => pick.championId)),
      available,
      roleNeeded,
    ).slice(0, 3);
  }, [available, champions, currentStep, draft.blueTeam, draft.redTeam, draft.focusedRole]);

  return (
    <section className="border border-[#292929] bg-[#080808] p-4">
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white">Recomendações</h2>
      <p className="mt-1 text-xs text-slate-500">Modelo local explicável · patch {patchVersion}</p>
      <div className="mt-3 space-y-3">
        {recommendations.length === 0 ? (
          <p className="text-sm text-slate-400">As sugestões aparecem durante etapas de pick.</p>
        ) : (
          recommendations.map((recommendation) => (
            <article key={recommendation.champion.id} className="border-l-2 border-gold/50 bg-[#0e0e0e] p-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white">{recommendation.champion.name}</h3>
                <span className="text-sm font-black text-gold">{recommendation.score}</span>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                {recommendation.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </div>
    </section>
  );
};
