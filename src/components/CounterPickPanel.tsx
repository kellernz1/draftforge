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
    <section className="rounded-lg border border-line bg-panel/90 p-4">
      <h2 className="font-display text-xl font-bold text-white">Counter Picks</h2>
      <p className="mt-1 text-sm text-slate-400">
        {target ? `Respostas para ${target.name}` : "Passe o mouse ou clique em um pick inimigo."}
      </p>
      <div className="mt-3 space-y-3">
        {counters.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum counter disponível selecionado.</p>
        ) : (
          counters.map((counter) => (
            <article key={counter.champion.id} className="rounded-md border border-line bg-night/60 p-3">
              <h3 className="font-bold text-white">{counter.champion.name}</h3>
              <p className="mt-1 text-xs text-slate-300">{counter.reason}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};
