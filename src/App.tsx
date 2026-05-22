import { useEffect, useState } from "react";
import { DraftPage } from "./pages/DraftPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TierListPage } from "./pages/TierListPage";
import { useSettingsStore } from "./store/useSettingsStore";

const routes = [
  { path: "/", label: "Draft" },
  { path: "/tierlist", label: "Tier List" },
  { path: "/settings", label: "Settings" },
] as const;

const navigate = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  const theme = useSettingsStore((state) => state.theme);

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
  }, [theme]);

  const Page = path === "/tierlist" ? TierListPage : path === "/settings" ? SettingsPage : DraftPage;

  return (
    <div className="min-h-screen bg-night text-slate-100 transition-colors">
      <header className="sticky top-0 z-10 border-b border-line bg-night/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-5 py-4">
          <button type="button" onClick={() => navigate("/")} className="font-display text-3xl font-black text-white">
            Draft<span className="text-gold">Forge</span>
          </button>
          <nav className="flex gap-2">
            {routes.map((route) => (
              <button
                key={route.path}
                type="button"
                onClick={() => navigate(route.path)}
                className={`rounded-md px-3 py-2 text-sm font-bold transition ${
                  path === route.path ? "bg-gold text-night" : "text-slate-300 hover:bg-panel hover:text-white"
                }`}
              >
                {route.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-[1800px] px-5 py-6">
        <Page />
      </div>
    </div>
  );
};
