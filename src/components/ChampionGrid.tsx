import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import { ChampionCard } from "./ChampionCard";
import { RoleFilter } from "./RoleFilter";
import { SearchBar } from "./SearchBar";

export const ChampionGrid = () => {
  const champions = useChampionStore((state) => state.champions);
  const selectChampion = useDraftStore((state) => state.selectChampion);
  const isChampionAvailable = useDraftStore((state) => state.isChampionAvailable);
  const isChampionFearlessLocked = useDraftStore((state) => state.isChampionFearlessLocked);
  const [search, setSearch] = useState("");
  const role = useDraftStore((state) => state.focusedRole);
  const setRole = useDraftStore((state) => state.setFocusedRole);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return champions.filter((champion) => {
      const matchesSearch = champion.name.toLowerCase().includes(query);
      const matchesRole = role === "All" || champion.roles.includes(role);
      return matchesSearch && matchesRole;
    });
  }, [champions, role, search]);

  return (
    <section className="min-w-0 border border-[#292929] bg-[#080808] p-3">
      <div className="mb-3 flex items-center gap-2 border-b border-[#292929] pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
        <Search size={14} /> Pool de campeões
      </div>
      <div className="mb-3 grid gap-2 xl:grid-cols-[1fr_auto]">
        <SearchBar value={search} onChange={setSearch} />
        <RoleFilter value={role} onChange={setRole} />
      </div>
      <div className="grid max-h-[620px] grid-cols-4 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7">
        {filtered.map((champion) => (
          <ChampionCard
            key={champion.id}
            champion={champion}
            available={isChampionAvailable(champion.id)}
            lockedReason={isChampionFearlessLocked(champion.id) ? "Bloqueado no Fearless" : undefined}
            onSelect={(championId) => selectChampion(championId, role === "All" ? champion.roles[0] : role)}
          />
        ))}
      </div>
    </section>
  );
};
