import { draftOrder } from "../data/draftOrder";
import { roles } from "../data/roles";
import type { DraftPhaseStep, DraftState, TeamDraft } from "../types/Draft";

export const createEmptyTeamDraft = (): TeamDraft => ({
  bans: [null, null, null, null, null],
  picks: roles.map((role) => ({ role, championId: null })),
});

export const getDraftPhase = (stepIndex: number, order: DraftPhaseStep[]): DraftState["phase"] => {
  if (stepIndex >= order.length) {
    return "complete";
  }

  if (stepIndex <= 5) {
    return "ban1";
  }

  if (stepIndex <= 11) {
    return "pick1";
  }

  if (stepIndex <= 15) {
    return "ban2";
  }

  return "pick2";
};

export const createInitialDraftState = (): DraftState => ({
  phase: "ban1",
  currentTeam: "blue",
  stepIndex: 0,
  blueTeam: createEmptyTeamDraft(),
  redTeam: createEmptyTeamDraft(),
  order: draftOrder.map((step) => ({ ...step })),
});

export const getSelectedChampionIds = (state: Pick<DraftState, "blueTeam" | "redTeam">) => {
  const bluePicks = state.blueTeam.picks.map((pick) => pick.championId);
  const redPicks = state.redTeam.picks.map((pick) => pick.championId);
  return [...state.blueTeam.bans, ...state.redTeam.bans, ...bluePicks, ...redPicks].filter(
    (championId): championId is string => Boolean(championId),
  );
};
