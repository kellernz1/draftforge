import { useMemo, useState } from "react";
import { useChampionStore } from "../store/useChampionStore";
import { useDraftStore } from "../store/useDraftStore";
import type { Role } from "../types/Champion";
import { ChampionCard } from "./ChampionCard";
import { RoleFilter } from "./RoleFilter";
import { SearchBar } from "./SearchBar";

export const ChampionGrid = () => {
  const champions = useChampionStore((state) => state.champions);
  const selectChampion = useDraftStore((state) => state.selectChampion);
  const isChampionAvailable = useDraftStore((state) => state.isChampionAvailable);
  const isChampionFearlessLocked = useDraftStore((state) => state.isChampionFearlessLocked);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<Role | "All">("All");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return champions.filter((champion) => {
      const matchesSearch = champion.name.toLowerCase().includes(query);
      const matchesRole = role === "All" || champion.roles.includes(role);
      return matchesSearch && matchesRole;
    });
  }, [champions, role, search]);

  return (
    <section className="min-w-0 rounded-lg border border-line bg-panel/90 p-4">
      <div className="mb-4 grid gap-3 xl:grid-cols-[1fr_auto]">
        <SearchBar value={search} onChange={setSearch} />
        <RoleFilter value={role} onChange={setRole} />
      </div>
      <div className="grid max-h-[660px] grid-cols-2 gap-3 overflow-y-auto pr-1 md:grid-cols-3 2xl:grid-cols-4">
        {filtered.map((champion) => (
          <ChampionCard
            key={champion.id}
            champion={champion}
            available={isChampionAvailable(champion.id)}
            lockedReason={isChampionFearlessLocked(champion.id) ? "Bloqueado no Fearless" : undefined}
            onSelect={selectChampion}
          />
        ))}
      </div>
    </section>
  );
};
