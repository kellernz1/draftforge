import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import { champions as defaultChampions } from "../data/champions";
import type { Champion } from "../types/Champion";

type ChampionStore = {
  champions: Champion[];
  updateChampion: (id: string, changes: Partial<Champion>) => void;
  resetToDefault: () => void;
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
      updateChampion: (id, changes) =>
        set((state) => ({
          champions: state.champions.map((champion) =>
            champion.id === id ? { ...champion, ...changes } : champion,
          ),
        })),
      resetToDefault: () => set({ champions: defaultChampions }),
    }),
    {
      name: "draftforge-tier-list",
      storage: createJSONStorage(() => safeStorage),
    },
  ),
);
