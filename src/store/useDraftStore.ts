import { create } from "zustand";
import { createInitialDraftState, getDraftPhase, getSelectedChampionIds } from "../services/draftService";
import type { DraftState } from "../types/Draft";

type DraftSnapshot = DraftState;
export type DraftMode = "normal" | "fearless";

type FearlessGameRecord = {
  gameNumber: number;
  bluePicks: string[];
  redPicks: string[];
};

type DraftStore = DraftState & {
  history: DraftSnapshot[];
  mode: DraftMode | null;
  currentGame: number;
  fearlessHistory: FearlessGameRecord[];
  fearlessLockedChampionIds: string[];
  selectMode: (mode: DraftMode) => void;
  backToModeSelect: () => void;
  initDraft: () => void;
  selectChampion: (championId: string) => void;
  undoLastStep: () => void;
  resetDraft: () => void;
  completeFearlessGame: () => void;
  startNextFearlessGame: () => void;
  isChampionAvailable: (championId: string) => boolean;
  isChampionFearlessLocked: (championId: string) => boolean;
};

const applySelection = (state: DraftStore, championId: string): DraftState | null => {
  const currentStep = state.order[state.stepIndex];
  if (!currentStep || !state.isChampionAvailable(championId)) {
    return null;
  }

  const blueTeam = {
    bans: [...state.blueTeam.bans],
    picks: state.blueTeam.picks.map((pick) => ({ ...pick })),
  };
  const redTeam = {
    bans: [...state.redTeam.bans],
    picks: state.redTeam.picks.map((pick) => ({ ...pick })),
  };
  const targetTeam = currentStep.team === "blue" ? blueTeam : redTeam;

  if (currentStep.action === "ban") {
    const banIndex = targetTeam.bans.findIndex((ban) => ban === null);
    if (banIndex === -1) {
      return null;
    }
    targetTeam.bans[banIndex] = championId;
  } else {
    const pickIndex = targetTeam.picks.findIndex(
      (pick) => pick.championId === null && (!currentStep.role || pick.role === currentStep.role),
    );
    if (pickIndex === -1) {
      return null;
    }
    targetTeam.picks[pickIndex] = { ...targetTeam.picks[pickIndex], championId };
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

const snapshot = (state: DraftStore): DraftSnapshot => ({
  phase: state.phase,
  currentTeam: state.currentTeam,
  stepIndex: state.stepIndex,
  blueTeam: {
    bans: [...state.blueTeam.bans],
    picks: state.blueTeam.picks.map((pick) => ({ ...pick })),
  },
  redTeam: {
    bans: [...state.redTeam.bans],
    picks: state.redTeam.picks.map((pick) => ({ ...pick })),
  },
  order: state.order.map((step) => ({ ...step })),
});

const initialState = createInitialDraftState();

const pickIds = (state: Pick<DraftState, "blueTeam" | "redTeam">) => ({
  bluePicks: state.blueTeam.picks
    .map((pick) => pick.championId)
    .filter((championId): championId is string => Boolean(championId)),
  redPicks: state.redTeam.picks
    .map((pick) => pick.championId)
    .filter((championId): championId is string => Boolean(championId)),
});

export const useDraftStore = create<DraftStore>((set, get) => ({
  ...initialState,
  history: [],
  mode: null,
  currentGame: 1,
  fearlessHistory: [],
  fearlessLockedChampionIds: [],
  selectMode: (mode) => {
    const fresh = createInitialDraftState();
    set({
      ...fresh,
      history: [],
      mode,
      currentGame: 1,
      fearlessHistory: [],
      fearlessLockedChampionIds: [],
    });
  },
  backToModeSelect: () => {
    const fresh = createInitialDraftState();
    set({
      ...fresh,
      history: [],
      mode: null,
      currentGame: 1,
      fearlessHistory: [],
      fearlessLockedChampionIds: [],
    });
  },
  initDraft: () => {
    const fresh = createInitialDraftState();
    set((state) => ({ ...fresh, history: [], mode: state.mode, currentGame: state.currentGame, fearlessHistory: state.fearlessHistory, fearlessLockedChampionIds: state.fearlessLockedChampionIds }));
  },
  selectChampion: (championId) =>
    set((state) => {
      const nextState = applySelection(state, championId);
      if (!nextState) {
        return state;
      }

      return {
        ...nextState,
        history: [...state.history, snapshot(state)],
      };
    }),
  undoLastStep: () =>
    set((state) => {
      const previous = state.history[state.history.length - 1];
      if (!previous) {
        return state;
      }

      return {
        ...previous,
        history: state.history.slice(0, -1),
      };
    }),
  resetDraft: () => {
    const fresh = createInitialDraftState();
    set((state) => ({
      ...fresh,
      history: [],
      mode: state.mode,
      currentGame: state.mode === "fearless" ? state.currentGame : 1,
      fearlessHistory: state.mode === "fearless" ? state.fearlessHistory : [],
      fearlessLockedChampionIds: state.mode === "fearless" ? state.fearlessLockedChampionIds : [],
    }));
  },
  completeFearlessGame: () =>
    set((state) => {
      if (state.mode !== "fearless" || state.phase !== "complete") {
        return state;
      }

      const existingRecord = state.fearlessHistory.some((record) => record.gameNumber === state.currentGame);
      if (existingRecord) {
        return state;
      }

      const picks = pickIds(state);
      const nextLocked = [...new Set([...state.fearlessLockedChampionIds, ...picks.bluePicks, ...picks.redPicks])];

      return {
        ...state,
        fearlessHistory: [...state.fearlessHistory, { gameNumber: state.currentGame, ...picks }],
        fearlessLockedChampionIds: nextLocked,
      };
    }),
  startNextFearlessGame: () => {
    const state = get();
    if (state.mode !== "fearless" || state.currentGame >= 5) {
      return;
    }

    if (state.phase === "complete") {
      get().completeFearlessGame();
    }

    const fresh = createInitialDraftState();
    const latest = get();
    set({
      ...fresh,
      history: [],
      mode: "fearless",
      currentGame: latest.currentGame + 1,
      fearlessHistory: latest.fearlessHistory,
      fearlessLockedChampionIds: latest.fearlessLockedChampionIds,
    });
  },
  isChampionAvailable: (championId) => {
    const state = get();
    const blockedByCurrentDraft = getSelectedChampionIds(state).includes(championId);
    const blockedByFearless = state.mode === "fearless" && state.fearlessLockedChampionIds.includes(championId);
    return !blockedByCurrentDraft && !blockedByFearless;
  },
  isChampionFearlessLocked: (championId) => get().mode === "fearless" && get().fearlessLockedChampionIds.includes(championId),
}));
