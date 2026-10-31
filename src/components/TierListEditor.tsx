import { useMemo, useState } from "react";
import { roles } from "../data/roles";
import { tags as allTags } from "../data/tags";
import { useChampionStore } from "../store/useChampionStore";
import { champions as defaultChampions } from "../data/champions";
import type { Champion, ChampionTier, Role } from "../types/Champion";
import { useSettingsStore } from "../store/useSettingsStore";
import { History, Trash2 } from "lucide-react";

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
  const metaSnapshots = useChampionStore((state) => state.metaSnapshots);
  const saveMetaSnapshot = useChampionStore((state) => state.saveMetaSnapshot);
  const removeMetaSnapshot = useChampionStore((state) => state.removeMetaSnapshot);
  const patchVersion = useSettingsStore((state) => state.patchVersion);
  const [selectedSnapshotId, setSelectedSnapshotId] = useState("");
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
    saveMetaSnapshot(patchVersion, Object.values(edits));
  };

  const selectedSnapshot = metaSnapshots.find((snapshot) => snapshot.id === selectedSnapshotId) ?? metaSnapshots[0];
  const tierChanges = selectedSnapshot
    ? Object.values(edits).filter((champion) => selectedSnapshot.tiers[champion.id] && selectedSnapshot.tiers[champion.id] !== champion.tier)
    : [];

  const reset = () => {
    resetToDefault();
    setEdits(Object.fromEntries(defaultChampions.map((champion) => [champion.id, { ...champion }])) as DraftEdits);
  };

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="eyebrow">Modelo local</p>
          <h1 className="page-title">Tier List</h1>
          <p className="text-sm text-slate-400">Ajustes são persistidos automaticamente pelo store após salvar.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={save} className="button-primary">
            Salvar
          </button>
          <button type="button" onClick={reset} className="button-secondary">
            Resetar ao padrão
          </button>
        </div>
      </div>
      <section className="panel-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-blueTeam/30 bg-blueTeam/5 text-blue-300"><History size={18} /></span>
            <div>
              <h2 className="font-display text-xl font-bold text-white">Patch snapshots</h2>
              <p className="text-xs text-slate-500">Salvar cria um retrato dos tiers do patch {patchVersion}.</p>
            </div>
          </div>
          {metaSnapshots.length > 0 && (
            <div className="flex items-center gap-2">
              <select value={selectedSnapshot?.id ?? ""} onChange={(event) => setSelectedSnapshotId(event.target.value)} className="border border-line bg-night px-3 py-2 text-sm text-slate-200">
                {metaSnapshots.map((snapshot) => <option key={snapshot.id} value={snapshot.id}>Patch {snapshot.patchVersion} · {new Date(snapshot.createdAt).toLocaleDateString("pt-BR")}</option>)}
              </select>
              {selectedSnapshot && <button type="button" aria-label="Excluir snapshot" onClick={() => removeMetaSnapshot(selectedSnapshot.id)} className="icon-button text-red-300"><Trash2 size={16} /></button>}
            </div>
          )}
        </div>
        <div className="mt-4 border border-line bg-night/50 p-3 text-sm text-slate-300">
          {!selectedSnapshot ? "Nenhum snapshot criado ainda." : tierChanges.length === 0 ? "Nenhuma mudança de tier em relação ao snapshot selecionado." : (
            <div className="flex flex-wrap gap-2">{tierChanges.map((champion) => <span key={champion.id} className="border border-line bg-panel px-2 py-1"><strong>{champion.name}</strong> {selectedSnapshot.tiers[champion.id]} → <span className="text-gold">{champion.tier}</span></span>)}</div>
          )}
        </div>
      </section>
      {grouped.map((group) => (
        <div key={group.tier} className="border border-[#292929] bg-[#080808] p-4">
          <h2 className="mb-4 border-b border-[#292929] pb-2 font-display text-xl font-bold uppercase tracking-[0.1em] text-gold">Tier {group.tier}</h2>
          <div className="grid gap-4 xl:grid-cols-2">
            {group.champions.map((champion) => (
              <article key={champion.id} className="border border-[#292929] bg-[#0b0b0b] p-4">
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
                <div className="mt-3 grid gap-3 md:grid-cols-3">
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
                  <input
                    value={champion.weakAgainst.join(", ")}
                    onChange={(event) => patchChampion(champion.id, { weakAgainst: parseCsv(event.target.value) })}
                    className="rounded border border-line bg-panel px-3 py-2 text-sm text-white"
                    placeholder="weakAgainst"
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
