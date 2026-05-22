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
      patchVersion: "26.10",
      setTheme: (theme) => set({ theme }),
      setPatchVersion: (patchVersion) => set({ patchVersion }),
    }),
    {
      name: "draftforge-settings",
    },
  ),
);
