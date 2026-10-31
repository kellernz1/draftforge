import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import { createInitialDraftState, getDraftPhase, getSelectedChampionIds } from "../services/draftService";
import type { Role } from "../types/Champion";
import type { ArchivedDraft, DraftState, TeamDraft } from "../types/Draft";

type DraftSnapshot = DraftState;
export type DraftMode = "normal" | "fearless";

type FearlessGameRecord = { gameNumber: number; bluePicks: string[]; redPicks: string[] };

type DraftStore = DraftState & {
  history: DraftSnapshot[];
  mode: DraftMode | null;
  currentGame: number;
  focusedRole: Role | "All";
  fearlessHistory: FearlessGameRecord[];
  fearlessLockedChampionIds: string[];
  archivedDrafts: ArchivedDraft[];
  selectMode: (mode: DraftMode) => void;
  backToModeSelect: () => void;
  initDraft: () => void;
  selectChampion: (championId: string, preferredRole?: Role) => void;
  assignPickRole: (team: "blue" | "red", championId: string, role: Role) => void;
  setFocusedRole: (role: Role | "All") => void;
  undoLastStep: () => void;
  resetDraft: () => void;
  completeFearlessGame: () => void;
  startNextFearlessGame: () => void;
  archiveCurrentDraft: (patchVersion: string) => void;
  removeArchivedDraft: (id: string) => void;
  clearArchivedDrafts: () => void;
  isChampionAvailable: (championId: string) => boolean;
  isChampionFearlessLocked: (championId: string) => boolean;
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
      // Memory storage keeps restricted previews usable.
    }
  },
  removeItem: (name) => {
    memoryStorage.delete(name);
    try {
      window.localStorage.removeItem(name);
    } catch {
      // Ignore unavailable browser storage.
    }
  },
};

const cloneTeam = (team: TeamDraft): TeamDraft => ({
  bans: [...team.bans],
  pickOrder: [...(team.pickOrder ?? team.picks.flatMap((pick) => (pick.championId ? [pick.championId] : [])))],
  picks: team.picks.map((pick) => ({ ...pick })),
});

const snapshot = (state: DraftStore): DraftSnapshot => ({
  phase: state.phase,
  currentTeam: state.currentTeam,
  stepIndex: state.stepIndex,
  blueTeam: cloneTeam(state.blueTeam),
  redTeam: cloneTeam(state.redTeam),
  order: state.order.map((step) => ({ ...step })),
});

const applySelection = (state: DraftStore, championId: string, preferredRole?: Role): DraftState | null => {
  const currentStep = state.order[state.stepIndex];
  if (!currentStep || !state.isChampionAvailable(championId)) return null;

  const blueTeam = cloneTeam(state.blueTeam);
  const redTeam = cloneTeam(state.redTeam);
  const targetTeam = currentStep.team === "blue" ? blueTeam : redTeam;

  if (currentStep.action === "ban") {
    const banIndex = targetTeam.bans.findIndex((ban) => ban === null);
    if (banIndex === -1) return null;
    targetTeam.bans[banIndex] = championId;
  } else {
    const preferredIndex = preferredRole
      ? targetTeam.picks.findIndex((pick) => pick.role === preferredRole && pick.championId === null)
      : -1;
    const pickIndex = preferredIndex >= 0 ? preferredIndex : targetTeam.picks.findIndex((pick) => pick.championId === null);
    if (pickIndex === -1) return null;
    targetTeam.picks[pickIndex] = { ...targetTeam.picks[pickIndex], championId };
    targetTeam.pickOrder.push(championId);
  }

  const nextStepIndex = state.stepIndex + 1;
  const nextStep = state.order[nextStepIndex];
  return {
    phase: getDraftPhase(nextStepIndex, state.order),
    currentTeam: nextStep?.team ?? currentStep.team,
    stepIndex: nextStepIndex,
    blueTeam,
    redTeam,
    order: state.order,
  };
};

const freshState = () => ({ ...createInitialDraftState(), history: [] as DraftSnapshot[], focusedRole: "All" as const });

const pickIds = (state: Pick<DraftState, "blueTeam" | "redTeam">) => ({
  bluePicks: state.blueTeam.picks.flatMap((pick) => (pick.championId ? [pick.championId] : [])),
  redPicks: state.redTeam.picks.flatMap((pick) => (pick.championId ? [pick.championId] : [])),
});

export const useDraftStore = create<DraftStore>()(
  persist(
    (set, get) => ({
      ...freshState(),
      mode: null,
      currentGame: 1,
      fearlessHistory: [],
      fearlessLockedChampionIds: [],
      archivedDrafts: [],
      selectMode: (mode) =>
        set((state) => ({
          ...freshState(), mode, currentGame: 1, fearlessHistory: [], fearlessLockedChampionIds: [], archivedDrafts: state.archivedDrafts,
        })),
      backToModeSelect: () =>
        set((state) => ({
          ...freshState(), mode: null, currentGame: 1, fearlessHistory: [], fearlessLockedChampionIds: [], archivedDrafts: state.archivedDrafts,
        })),
      initDraft: () =>
        set((state) => ({
          ...freshState(), mode: state.mode, currentGame: state.currentGame, fearlessHistory: state.fearlessHistory,
          fearlessLockedChampionIds: state.fearlessLockedChampionIds, archivedDrafts: state.archivedDrafts,
        })),
      selectChampion: (championId, preferredRole) =>
        set((state) => {
          const nextState = applySelection(state, championId, preferredRole);
          return nextState ? { ...nextState, history: [...state.history, snapshot(state)] } : state;
        }),
      assignPickRole: (team, championId, role) =>
        set((state) => {
          const teamDraft = cloneTeam(team === "blue" ? state.blueTeam : state.redTeam);
          const currentIndex = teamDraft.picks.findIndex((pick) => pick.championId === championId);
          const targetIndex = teamDraft.picks.findIndex((pick) => pick.role === role);
          if (currentIndex < 0 || targetIndex < 0 || currentIndex === targetIndex) return state;
          const currentChampion = teamDraft.picks[currentIndex].championId;
          teamDraft.picks[currentIndex].championId = teamDraft.picks[targetIndex].championId;
          teamDraft.picks[targetIndex].championId = currentChampion;
          return team === "blue" ? { blueTeam: teamDraft } : { redTeam: teamDraft };
        }),
      setFocusedRole: (focusedRole) => set({ focusedRole }),
      undoLastStep: () =>
        set((state) => {
          const previous = state.history[state.history.length - 1];
          return previous ? { ...previous, history: state.history.slice(0, -1) } : state;
        }),
      resetDraft: () =>
        set((state) => ({
          ...freshState(), mode: state.mode, currentGame: state.mode === "fearless" ? state.currentGame : 1,
          fearlessHistory: state.mode === "fearless" ? state.fearlessHistory : [],
          fearlessLockedChampionIds: state.mode === "fearless" ? state.fearlessLockedChampionIds : [],
          archivedDrafts: state.archivedDrafts,
        })),
      completeFearlessGame: () =>
        set((state) => {
          if (state.mode !== "fearless" || state.phase !== "complete") return state;
          if (state.fearlessHistory.some((record) => record.gameNumber === state.currentGame)) return state;
          const picks = pickIds(state);
          return {
            fearlessHistory: [...state.fearlessHistory, { gameNumber: state.currentGame, ...picks }],
            fearlessLockedChampionIds: [...new Set([...state.fearlessLockedChampionIds, ...picks.bluePicks, ...picks.redPicks])],
          };
        }),
      startNextFearlessGame: () => {
        const state = get();
        if (state.mode !== "fearless" || state.currentGame >= 5 || state.phase !== "complete") return;
        get().completeFearlessGame();
        const latest = get();
        set({
          ...freshState(), mode: "fearless", currentGame: latest.currentGame + 1, fearlessHistory: latest.fearlessHistory,
          fearlessLockedChampionIds: latest.fearlessLockedChampionIds, archivedDrafts: latest.archivedDrafts,
        });
      },
      archiveCurrentDraft: (patchVersion) =>
        set((state) => {
          if (!state.mode || state.phase !== "complete") return state;
          const signature = JSON.stringify([state.mode, state.currentGame, state.blueTeam, state.redTeam]);
          const alreadyArchived = state.archivedDrafts.some(
            (draft) => JSON.stringify([draft.mode, draft.gameNumber, draft.blueTeam, draft.redTeam]) === signature,
          );
          if (alreadyArchived) return state;
          const record: ArchivedDraft = {
            id: crypto.randomUUID?.() ?? `${Date.now()}-${state.currentGame}`,
            createdAt: new Date().toISOString(), patchVersion, mode: state.mode, gameNumber: state.currentGame,
            blueTeam: cloneTeam(state.blueTeam), redTeam: cloneTeam(state.redTeam),
          };
          return { archivedDrafts: [record, ...state.archivedDrafts].slice(0, 50) };
        }),
      removeArchivedDraft: (id) => set((state) => ({ archivedDrafts: state.archivedDrafts.filter((draft) => draft.id !== id) })),
      clearArchivedDrafts: () => set({ archivedDrafts: [] }),
      isChampionAvailable: (championId) => {
        const state = get();
        return !getSelectedChampionIds(state).includes(championId) &&
          !(state.mode === "fearless" && state.fearlessLockedChampionIds.includes(championId));
      },
      isChampionFearlessLocked: (championId) =>
        get().mode === "fearless" && get().fearlessLockedChampionIds.includes(championId),
    }),
    {
      name: "draftforge-draft-v2",
      version: 3,
      storage: createJSONStorage(() => safeStorage),
      migrate: (persisted) => {
        const previous = persisted as Partial<DraftStore>;
        const normalizeTeam = (team: TeamDraft | undefined) => team ? cloneTeam(team) : team;
        return {
          ...previous,
          blueTeam: normalizeTeam(previous.blueTeam),
          redTeam: normalizeTeam(previous.redTeam),
          history: previous.history?.map((entry) => ({
            ...entry,
            blueTeam: cloneTeam(entry.blueTeam),
            redTeam: cloneTeam(entry.redTeam),
          })),
          focusedRole: previous.focusedRole ?? "All",
          archivedDrafts: previous.archivedDrafts?.map((draft) => ({
            ...draft,
            blueTeam: cloneTeam(draft.blueTeam),
            redTeam: cloneTeam(draft.redTeam),
          })) ?? [],
        } as DraftStore;
      },
    },
  ),
);
