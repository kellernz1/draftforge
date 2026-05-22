import { useMemo, useState } from "react";
import { roles } from "../data/roles";
import { tags as allTags } from "../data/tags";
import { useChampionStore } from "../store/useChampionStore";
import type { Champion, ChampionTier, Role } from "../types/Champion";

const tiers: ChampionTier[] = ["S", "A", "B", "C", "D"];

const parseCsv = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

type DraftEdits = Record<string, Champion>;

export const TierListEditor = () => {
  const champions = useChampionStore((state) => state.champions);
  const updateChampion = useChampionStore((state) => state.updateChampion);
  const resetToDefault = useChampionStore((state) => state.resetToDefault);
  const [edits, setEdits] = useState<DraftEdits>(() =>
    Object.fromEntries(champions.map((champion) => [champion.id, { ...champion }])) as DraftEdits,
  );

  const grouped = useMemo(
    () =>
      tiers.map((tier) => ({
        tier,
        champions: Object.values(edits)
          .filter((champion) => champion.tier === tier)
          .sort((a, b) => a.name.localeCompare(b.name)),
      })),
    [edits],
  );

  const patchChampion = (id: string, changes: Partial<Champion>) => {
    setEdits((state) => ({
      ...state,
      [id]: { ...state[id], ...changes },
    }));
  };

  const toggleRole = (champion: Champion, role: Role) => {
    const nextRoles = champion.roles.includes(role)
      ? champion.roles.filter((item) => item !== role)
      : [...champion.roles, role];
    patchChampion(champion.id, { roles: nextRoles.length > 0 ? nextRoles : champion.roles });
  };

  const save = () => {
    Object.values(edits).forEach((champion) => updateChampion(champion.id, champion));
  };

  const reset = () => {
    resetToDefault();
    setEdits(Object.fromEntries(champions.map((champion) => [champion.id, { ...champion }])) as DraftEdits);
  };

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl font-bold text-white">Tier List</h1>
          <p className="text-sm text-slate-400">Ajustes são persistidos automaticamente pelo store após salvar.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={save} className="rounded-md bg-gold px-4 py-2 font-bold text-night">
            Salvar
          </button>
          <button type="button" onClick={reset} className="rounded-md border border-line px-4 py-2 font-bold text-slate-200">
            Resetar ao padrão
          </button>
        </div>
      </div>
      {grouped.map((group) => (
        <div key={group.tier} className="rounded-lg border border-line bg-panel/90 p-4">
          <h2 className="mb-4 font-display text-2xl font-bold text-gold">Tier {group.tier}</h2>
          <div className="grid gap-4 xl:grid-cols-2">
            {group.champions.map((champion) => (
              <article key={champion.id} className="rounded-md border border-line bg-night/60 p-4">
                <div className="grid gap-3 md:grid-cols-[1fr_88px]">
                  <h3 className="font-display text-2xl font-bold text-white">{champion.name}</h3>
                  <select
                    value={champion.tier}
                    onChange={(event) => patchChampion(champion.id, { tier: event.target.value as ChampionTier })}
                    className="rounded border border-line bg-panel px-2 py-2 text-white"
                  >
                    {tiers.map((tier) => (
                      <option key={tier} value={tier}>
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <label key={role} className="flex items-center gap-2 rounded bg-slate-800 px-2 py-1 text-xs text-slate-200">
                      <input type="checkbox" checked={champion.roles.includes(role)} onChange={() => toggleRole(champion, role)} />
                      {role}
                    </label>
                  ))}
                </div>
                <label className="mt-3 block text-xs font-bold uppercase text-slate-500">Tags</label>
                <select
                  multiple
                  value={champion.tags}
                  onChange={(event) =>
                    patchChampion(champion.id, {
                      tags: Array.from(event.target.selectedOptions).map((option) => option.value),
                    })
                  }
                  className="mt-1 h-24 w-full rounded border border-line bg-panel px-2 py-2 text-sm text-white"
                >
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <input
                    value={champion.counters.join(", ")}
                    onChange={(event) => patchChampion(champion.id, { counters: parseCsv(event.target.value) })}
                    className="rounded border border-line bg-panel px-3 py-2 text-sm text-white"
                    placeholder="counters"
                  />
                  <input
                    value={champion.goodWith.join(", ")}
                    onChange={(event) => patchChampion(champion.id, { goodWith: parseCsv(event.target.value) })}
                    className="rounded border border-line bg-panel px-3 py-2 text-sm text-white"
                    placeholder="goodWith"
                  />
                </div>
                <textarea
                  value={champion.notes ?? ""}
                  onChange={(event) => patchChampion(champion.id, { notes: event.target.value })}
                  className="mt-3 h-20 w-full rounded border border-line bg-panel px-3 py-2 text-sm text-white"
                  placeholder="Notas"
                />
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
