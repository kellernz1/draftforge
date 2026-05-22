import { DraftBoard } from "../components/DraftBoard";
import { useDraftStore } from "../store/useDraftStore";

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

  if (!mode) {
    return (
      <main className="grid min-h-[calc(100vh-120px)] place-items-center">
        <section className="w-full max-w-5xl">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">DraftForge</p>
            <h1 className="mt-2 font-display text-5xl font-black text-white">Escolha o modo de draft</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => selectMode("normal")}
              className="rounded-lg border border-line bg-panel/90 p-6 text-left transition hover:-translate-y-0.5 hover:border-blueTeam hover:shadow-glow"
            >
              <h2 className="font-display text-3xl font-bold text-white">Normal Draft</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Fluxo atual de draft em jogo único, com bans, picks, analise, recomendações e counters.
              </p>
            </button>
            <button
              type="button"
              onClick={() => selectMode("fearless")}
              className="rounded-lg border border-line bg-panel/90 p-6 text-left transition hover:-translate-y-0.5 hover:border-gold hover:shadow-gold"
            >
              <h2 className="font-display text-3xl font-bold text-white">Fearless Draft</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Série de até 5 partidas. Campeões pickados em partidas anteriores ficam bloqueados para os próximos jogos.
              </p>
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{mode === "fearless" ? "Fearless Draft" : "Normal Draft"}</p>
          {mode === "fearless" && (
            <p className="mt-1 text-sm text-slate-400">
              Partida {currentGame} / 5 · {fearlessHistory.length} partidas registradas
            </p>
          )}
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {mode === "fearless" && phase === "complete" && (
            <>
              <button type="button" onClick={completeFearlessGame} className="rounded-md bg-gold px-4 py-2 font-bold text-night">
                Registrar partida
              </button>
              <button
                type="button"
                onClick={startNextFearlessGame}
                disabled={currentGame >= 5}
                className="rounded-md bg-blueTeam px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Proxima partida
              </button>
            </>
          )}
          <button type="button" onClick={backToModeSelect} className="rounded-md border border-line px-4 py-2 font-bold text-slate-200">
            Trocar modo
          </button>
        <button type="button" onClick={initDraft} className="rounded-md bg-blueTeam px-4 py-2 font-bold text-white">
          Iniciar Draft
        </button>
        <button type="button" onClick={resetDraft} className="rounded-md border border-line px-4 py-2 font-bold text-slate-200">
          Resetar
        </button>
        </div>
      </div>
      <DraftBoard />
    </main>
  );
};
