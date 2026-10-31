import { useSettingsStore } from "../store/useSettingsStore";

export const SettingsPage = () => {
  const patchVersion = useSettingsStore((state) => state.patchVersion);
  const setPatchVersion = useSettingsStore((state) => state.setPatchVersion);

  return (
    <section className="panel-card p-6">
      <p className="eyebrow">Preferências locais</p>
      <h1 className="page-title">Ajustes</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">O patch controla as imagens do Data Dragon e é registrado em cada exportação. Rankings continuam sendo uma curadoria offline.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="border border-[#292929] bg-[#080808] p-4">
          <span className="block text-sm font-bold uppercase tracking-wider text-slate-300">Tema competitivo</span>
          <p className="mt-2 text-sm leading-6 text-slate-500">Interface escura inspirada no cliente de League of Legends, otimizada para salas de draft.</p>
        </div>
        <label className="border border-[#292929] bg-[#080808] p-4">
          <span className="block text-sm font-bold text-slate-300">Patch do Data Dragon</span>
          <select
            className="mt-2 w-full rounded border border-line bg-panel px-3 py-2 text-white"
            value={patchVersion}
            onChange={(event) => setPatchVersion(event.target.value)}
          >
            {["16.21.1", "16.20.1", "16.19.1", "16.18.1"].map((patch) => <option key={patch}>{patch}</option>)}
          </select>
        </label>
      </div>
    </section>
  );
};
