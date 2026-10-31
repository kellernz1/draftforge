import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "dark" | "light";

type SettingsStore = {
  theme: ThemeMode;
  patchVersion: string;
  setTheme: (theme: ThemeMode) => void;
  setPatchVersion: (patchVersion: string) => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      theme: "dark",
      patchVersion: "16.21.1",
      setTheme: (theme) => set({ theme }),
      setPatchVersion: (patchVersion) => set({ patchVersion }),
    }),
    {
      name: "draftforge-settings",
      version: 2,
      migrate: (persisted) => {
        const previous = persisted as Partial<SettingsStore>;
        return {
          theme: previous.theme ?? "dark",
          patchVersion: previous.patchVersion === "26.10" ? "16.21.1" : (previous.patchVersion ?? "16.21.1"),
        };
      },
    },
  ),
);
