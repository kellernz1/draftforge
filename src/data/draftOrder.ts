import type { DraftPhaseStep } from "../types/Draft";

const banPhase1: DraftPhaseStep[] = [
  { team: "blue", action: "ban" },
  { team: "red", action: "ban" },
  { team: "blue", action: "ban" },
  { team: "red", action: "ban" },
  { team: "blue", action: "ban" },
  { team: "red", action: "ban" },
];

const pickPhase1Teams: DraftPhaseStep["team"][] = ["blue", "red", "red", "blue", "blue", "red"];

const banPhase2: DraftPhaseStep[] = [
  { team: "red", action: "ban" },
  { team: "blue", action: "ban" },
  { team: "red", action: "ban" },
  { team: "blue", action: "ban" },
];

const pickPhase2Teams: DraftPhaseStep["team"][] = ["red", "blue", "blue", "red"];

export const draftOrder: DraftPhaseStep[] = [
  ...banPhase1,
  ...pickPhase1Teams.map((team) => ({ team, action: "pick" as const })),
  ...banPhase2,
  ...pickPhase2Teams.map((team) => ({ team, action: "pick" as const })),
];
