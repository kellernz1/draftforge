import { Download, Trash2 } from "lucide-react";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import { downloadJson } from "../services/exportService";

export const HistoryPage = () => {
  const champions = useChampionStore((state) => state.champions);
  const drafts = useDraftStore((state) => state.archivedDrafts);
  const removeDraft = useDraftStore((state) => state.removeArchivedDraft);
  const clearDrafts = useDraftStore((state) => state.clearArchivedDrafts);
  const championName = (id: string | null) => champions.find((champion) => champion.id === id)?.name ?? id;

  return (
    <main className="space-y-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Biblioteca local</p>
          <h1 className="page-title">Histórico de drafts</h1>
          <p className="mt-2 text-sm text-slate-400">Até 50 drafts ficam salvos neste navegador.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" disabled={!drafts.length} onClick={() => downloadJson("draftforge-history.json", drafts)} className="button-secondary"><Download size={16} /> Exportar tudo</button>
          <button type="button" disabled={!drafts.length} onClick={clearDrafts} className="button-danger"><Trash2 size={16} /> Limpar</button>
        </div>
      </header>
      {drafts.length === 0 ? (
        <section className="empty-state"><ArchiveCopy /> <h2>Nenhum draft arquivado</h2><p>Finalize um draft e use “Arquivar” para guardar a composição.</p></section>
      ) : (
        <div className="grid gap-4 xl:grid-cols-2">
          {drafts.map((draft) => (
            <article key={draft.id} className="panel-card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow">{draft.mode === "fearless" ? `Fearless · Jogo ${draft.gameNumber}` : "Normal Draft"}</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white">Patch {draft.patchVersion}</h2>
                  <time className="text-xs text-slate-500">{new Date(draft.createdAt).toLocaleString("pt-BR")}</time>
                </div>
                <div className="flex gap-1">
                  <button type="button" aria-label="Exportar draft" onClick={() => downloadJson(`draftforge-${draft.id}.json`, draft)} className="icon-button"><Download size={16} /></button>
                  <button type="button" aria-label="Excluir draft" onClick={() => removeDraft(draft.id)} className="icon-button text-red-300"><Trash2 size={16} /></button>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(["blueTeam", "redTeam"] as const).map((teamKey) => (
                  <div key={teamKey} className="border border-[#292929] bg-[#080808] p-3">
                    <h3 className={`text-xs font-black uppercase tracking-wider ${teamKey === "blueTeam" ? "text-blue-300" : "text-red-300"}`}>{teamKey === "blueTeam" ? "Blue" : "Red"}</h3>
                    <ol className="mt-2 space-y-1 text-sm text-slate-300">
                      {draft[teamKey].picks.map((pick) => <li key={pick.role}><span className="inline-block w-16 text-xs text-slate-500">{pick.role}</span>{championName(pick.championId) ?? "—"}</li>)}
                    </ol>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

const ArchiveCopy = () => <div className="text-5xl opacity-30">◇</div>;
