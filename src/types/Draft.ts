import type { Role } from "./Champion";

export type TeamDraft = {
  bans: (string | null)[];
  picks: {
    role: Role;
    championId: string | null;
  }[];
};

export type DraftPhaseStep = {
  team: "blue" | "red";
  action: "ban" | "pick";
  role?: Role;
};

export type DraftState = {
  phase: "ban1" | "pick1" | "ban2" | "pick2" | "complete";
  currentTeam: "blue" | "red";
  stepIndex: number;
  blueTeam: TeamDraft;
  redTeam: TeamDraft;
  order: DraftPhaseStep[];
};
