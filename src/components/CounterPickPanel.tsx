import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import { getCounters } from "../services/counterService";

type CounterPickPanelProps = {
  inspectedChampionId?: string;
};

export const CounterPickPanel = ({ inspectedChampionId }: CounterPickPanelProps) => {
  const champions = useChampionStore((state) => state.champions);
  const isChampionAvailable = useDraftStore((state) => state.isChampionAvailable);
  const target = champions.find((champion) => champion.id === inspectedChampionId);
  const counters = inspectedChampionId
    ? getCounters(
        inspectedChampionId,
        champions.filter((champion) => champion.id === inspectedChampionId || isChampionAvailable(champion.id)),
      )
    : [];

  return (
    <section className="border border-[#292929] bg-[#080808] p-4">
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white">Counter Picks</h2>
      <p className="mt-1 text-sm text-slate-400">
        {target ? `Respostas para ${target.name}` : "Passe o mouse ou clique em um campeão escolhido."}
      </p>
      <div className="mt-3 space-y-3">
        {counters.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum counter disponível selecionado.</p>
        ) : (
          counters.map((counter) => (
            <article key={counter.champion.id} className="border-l-2 border-redTeam/50 bg-[#0e0e0e] p-3">
              <h3 className="font-bold text-white">{counter.champion.name}</h3>
              <p className="mt-1 text-xs text-slate-300">{counter.reason}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};
