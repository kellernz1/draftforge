import type { Role } from "./Champion";

export type TeamDraft = {
  bans: (string | null)[];
  pickOrder: string[];
  picks: {
    role: Role;
    championId: string | null;
  }[];
};

export type DraftPhaseStep = {
  team: "blue" | "red";
  action: "ban" | "pick";
};

export type DraftState = {
  phase: "ban1" | "pick1" | "ban2" | "pick2" | "complete";
  currentTeam: "blue" | "red";
  stepIndex: number;
  blueTeam: TeamDraft;
  redTeam: TeamDraft;
  order: DraftPhaseStep[];
};

export type ArchivedDraft = {
  id: string;
  createdAt: string;
  patchVersion: string;
  mode: "normal" | "fearless";
  gameNumber: number;
  blueTeam: TeamDraft;
  redTeam: TeamDraft;
};
