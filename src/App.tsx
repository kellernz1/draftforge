import { useEffect, useState } from "react";
import { Archive, DraftingCompass, ListFilter, Settings } from "lucide-react";
import { DraftPage } from "./pages/DraftPage";
import { HistoryPage } from "./pages/HistoryPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TierListPage } from "./pages/TierListPage";
import { useSettingsStore } from "./store/useSettingsStore";

const routes = [
  { path: "/", label: "Draft", icon: DraftingCompass },
  { path: "/tierlist", label: "Tier List", icon: ListFilter },
  { path: "/history", label: "Histórico", icon: Archive },
  { path: "/settings", label: "Ajustes", icon: Settings },
] as const;

const currentPath = () => window.location.hash.slice(1) || "/";
const navigate = (path: string) => {
  window.location.hash = path;
};

export const App = () => {
  const [path, setPath] = useState(currentPath);
  const patchVersion = useSettingsStore((state) => state.patchVersion);

  useEffect(() => {
    const syncPath = () => setPath(currentPath());
    window.addEventListener("hashchange", syncPath);
    return () => window.removeEventListener("hashchange", syncPath);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("theme-light");
    document.documentElement.classList.add("theme-dark");
  }, []);

  const Page = path === "/tierlist" ? TierListPage : path === "/history" ? HistoryPage : path === "/settings" ? SettingsPage : DraftPage;

  return (
    <div className="min-h-screen bg-night text-slate-100 transition-colors">
      <header className="sticky top-0 z-30 border-b border-[#272727] bg-[#080808]/95 backdrop-blur">
        <div className="relative mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <button type="button" onClick={() => navigate("/")} className="flex items-center gap-3 border-r border-[#2d2d2d] pr-6 text-left">
            <span className="grid h-9 w-9 place-items-center text-gold"><DraftingCompass size={25} strokeWidth={1.3} /></span>
            <span>
              <span className="block font-display text-xl font-bold uppercase leading-none tracking-[0.08em] text-white">Draft<span className="text-gold">Forge</span></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-500">Competitive draft · {patchVersion}</span>
            </span>
          </button>
          <nav aria-label="Navegação principal" className="flex max-w-full gap-1 overflow-x-auto">
            {routes.map((route) => {
              const Icon = route.icon;
              const active = path === route.path;
              return (
                <button
                  key={route.path}
                  type="button"
                  aria-current={active ? "page" : undefined}
                  onClick={() => navigate(route.path)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] transition ${active ? "border-gold text-gold" : "border-transparent text-slate-500 hover:border-slate-600 hover:text-white"}`}
                >
                  <Icon size={15} /> <span className="hidden sm:inline">{route.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-[1800px] px-3 py-4 sm:px-5"><Page /></div>
    </div>
  );
};
