import { useSettingsStore, type ThemeMode } from "../store/useSettingsStore";

export const SettingsPage = () => {
  const theme = useSettingsStore((state) => state.theme);
  const patchVersion = useSettingsStore((state) => state.patchVersion);
  const setTheme = useSettingsStore((state) => state.setTheme);
  const setPatchVersion = useSettingsStore((state) => state.setPatchVersion);

  return (
    <section className="rounded-lg border border-line bg-panel/90 p-6">
      <h1 className="font-display text-4xl font-bold text-white">Settings</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="rounded-md border border-line bg-night/60 p-4">
          <span className="block text-sm font-bold text-slate-300">Modo claro/escuro</span>
          <select
            className="mt-2 w-full rounded border border-line bg-panel px-3 py-2 text-white"
            value={theme}
            onChange={(event) => setTheme(event.target.value as ThemeMode)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <label className="rounded-md border border-line bg-night/60 p-4">
          <span className="block text-sm font-bold text-slate-300">Patch version</span>
          <input
            className="mt-2 w-full rounded border border-line bg-panel px-3 py-2 text-white"
            value={patchVersion}
            onChange={(event) => setPatchVersion(event.target.value)}
          />
        </label>
      </div>
    </section>
  );
};
