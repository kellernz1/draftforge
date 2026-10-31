import { DraftBoard } from "../components/DraftBoard";
import { useDraftStore } from "../store/useDraftStore";
import { Archive, RotateCcw, Swords } from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";

export const DraftPage = () => {
  const initDraft = useDraftStore((state) => state.initDraft);
  const resetDraft = useDraftStore((state) => state.resetDraft);
  const mode = useDraftStore((state) => state.mode);
  const selectMode = useDraftStore((state) => state.selectMode);
  const backToModeSelect = useDraftStore((state) => state.backToModeSelect);
  const currentGame = useDraftStore((state) => state.currentGame);
  const phase = useDraftStore((state) => state.phase);
  const completeFearlessGame = useDraftStore((state) => state.completeFearlessGame);
  const startNextFearlessGame = useDraftStore((state) => state.startNextFearlessGame);
  const fearlessHistory = useDraftStore((state) => state.fearlessHistory);
  const archiveCurrentDraft = useDraftStore((state) => state.archiveCurrentDraft);
  const patchVersion = useSettingsStore((state) => state.patchVersion);

  if (!mode) {
    return (
      <main className="grid min-h-[calc(100vh-120px)] place-items-center py-8">
        <section className="w-full max-w-3xl border border-[#292929] bg-[#090909]">
          <div className="border-b border-[#292929] px-6 py-5 text-center">
            <p className="eyebrow">Patch {patchVersion}</p>
            <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.08em] text-white">Criar sala de draft</h1>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Selecione o formato da série</p>
          </div>
          <div className="grid gap-px bg-[#292929] md:grid-cols-2">
            <button
              type="button"
              onClick={() => selectMode("normal")}
              className="group bg-[#0b0b0b] p-8 text-left transition hover:bg-[#111]"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">01 · Standard</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-white">Normal Draft</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Uma partida com sequência competitiva completa de bans e picks.
              </p>
              <span className="mt-7 block border-t border-[#292929] pt-4 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">Selecionar →</span>
            </button>
            <button
              type="button"
              onClick={() => selectMode("fearless")}
              className="group bg-[#0b0b0b] p-8 text-left transition hover:bg-[#111]"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">02 · Series</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-white">Fearless Draft</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Série de até cinco jogos com bloqueio automático dos picks anteriores.
              </p>
              <span className="mt-7 block border-t border-[#292929] pt-4 text-xs font-bold uppercase tracking-[0.14em] text-gold">Selecionar →</span>
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#292929] pb-3">
        <div>
          <p className="eyebrow">{mode === "fearless" ? "Fearless Draft" : "Normal Draft"}</p>
          {mode === "fearless" && (
            <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
              Partida {currentGame} / 5 · {fearlessHistory.length} partidas registradas
            </p>
          )}
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {mode === "fearless" && phase === "complete" && (
            <>
              <button type="button" onClick={completeFearlessGame} className="button-primary">
                Registrar partida
              </button>
              <button
                type="button"
                onClick={startNextFearlessGame}
                disabled={currentGame >= 5}
                className="button-secondary border-blueTeam/50 text-blue-300"
              >
                Proxima partida
              </button>
            </>
          )}
          {phase === "complete" && (
            <button type="button" onClick={() => archiveCurrentDraft(patchVersion)} className="button-primary"><Archive size={16} /> Arquivar</button>
          )}
          <button type="button" onClick={backToModeSelect} className="button-secondary">
            Trocar modo
          </button>
        <button type="button" onClick={initDraft} className="button-secondary">
          <Swords size={16} /> Novo draft
        </button>
        <button type="button" onClick={resetDraft} className="button-secondary">
          <RotateCcw size={16} /> Resetar
        </button>
        </div>
      </div>
      <DraftBoard />
    </main>
  );
};
