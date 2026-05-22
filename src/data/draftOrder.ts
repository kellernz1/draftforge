import type { DraftPhaseStep } from "../types/Draft";

const pickRoles: Record<"blue" | "red", DraftPhaseStep["role"][]> = {
  blue: ["Top", "Jungle", "Mid", "ADC", "Support"],
  red: ["Top", "Jungle", "Mid", "ADC", "Support"],
};

const nextRole = (team: "blue" | "red") => {
  const role = pickRoles[team].shift();
  if (!role) {
    throw new Error(`Draft order requested too many picks for ${team}`);
  }
  return role;
};

const banPhase1: DraftPhaseStep[] = [
  { team: "blue", action: "ban" },
  { team: "blue", action: "ban" },
  { team: "red", action: "ban" },
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
  ...pickPhase1Teams.map((team) => ({ team, action: "pick" as const, role: nextRole(team) })),
  ...banPhase2,
  ...pickPhase2Teams.map((team) => ({ team, action: "pick" as const, role: nextRole(team) })),
];
