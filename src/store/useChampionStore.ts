import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import { champions as defaultChampions } from "../data/champions";
import type { Champion, ChampionTier } from "../types/Champion";

export type MetaSnapshot = {
  id: string;
  patchVersion: string;
  createdAt: string;
  tiers: Record<string, ChampionTier>;
};

type ChampionStore = {
  champions: Champion[];
  metaSnapshots: MetaSnapshot[];
  updateChampion: (id: string, changes: Partial<Champion>) => void;
  resetToDefault: () => void;
  saveMetaSnapshot: (patchVersion: string, champions: Champion[]) => void;
  removeMetaSnapshot: (id: string) => void;
};

const memoryStorage = new Map<string, string>();

const safeStorage: StateStorage = {
  getItem: (name) => {
    try {
      return window.localStorage.getItem(name) ?? memoryStorage.get(name) ?? null;
    } catch {
      return memoryStorage.get(name) ?? null;
    }
  },
  setItem: (name, value) => {
    memoryStorage.set(name, value);
    try {
      window.localStorage.setItem(name, value);
    } catch {
      // The in-memory fallback keeps the app usable in sandboxed previews.
    }
  },
  removeItem: (name) => {
    memoryStorage.delete(name);
    try {
      window.localStorage.removeItem(name);
    } catch {
      // Ignore storage errors from strict preview sandboxes.
    }
  },
};

export const useChampionStore = create<ChampionStore>()(
  persist(
    (set) => ({
      champions: defaultChampions,
      metaSnapshots: [],
      updateChampion: (id, changes) =>
        set((state) => ({
          champions: state.champions.map((champion) =>
            champion.id === id ? { ...champion, ...changes } : champion,
          ),
        })),
      resetToDefault: () => set({ champions: defaultChampions }),
      saveMetaSnapshot: (patchVersion, champions) =>
        set((state) => ({
          metaSnapshots: [
            {
              id: crypto.randomUUID?.() ?? `${Date.now()}-${patchVersion}`,
              patchVersion,
              createdAt: new Date().toISOString(),
              tiers: Object.fromEntries(champions.map((champion) => [champion.id, champion.tier])),
            },
            ...state.metaSnapshots,
          ].slice(0, 20),
        })),
      removeMetaSnapshot: (id) => set((state) => ({ metaSnapshots: state.metaSnapshots.filter((snapshot) => snapshot.id !== id) })),
    }),
    {
      name: "draftforge-tier-list",
      storage: createJSONStorage(() => safeStorage),
      version: 3,
      merge: (persisted, current) => {
        const saved = (persisted as Partial<ChampionStore>).champions ?? [];
        const savedById = new Map(saved.map((champion) => [champion.id, champion]));
        return {
          ...current,
          champions: defaultChampions.map((champion) => ({ ...champion, ...savedById.get(champion.id) })),
          metaSnapshots: (persisted as Partial<ChampionStore>).metaSnapshots ?? [],
        };
      },
    },
  ),
);
