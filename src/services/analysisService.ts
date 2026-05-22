import type { TeamAnalysis } from "../types/Analysis";
import type { Champion, ChampionTier } from "../types/Champion";

const clampScore = (score: number) => Math.max(0, Math.min(100, Math.round(score)));

const tierScore: Record<ChampionTier, number> = {
  S: 100,
  A: 80,
  B: 60,
  C: 40,
  D: 20,
};

const tagScore = (picks: Champion[], scoringTags: string[], pointsPerTag: number) => {
  const total = picks.reduce((score, champion) => {
    const matches = champion.tags.filter((tag) => scoringTags.includes(tag)).length;
    return score + matches * pointsPerTag;
  }, 0);

  return clampScore(total);
};

export const analyzeTeam = (picks: Champion[]): TeamAnalysis => {
  if (picks.length === 0) {
    return {
      damageBalance: 0,
      frontline: 0,
      engage: 0,
      peel: 0,
      crowdControl: 0,
      scaling: 0,
      earlyGame: 0,
      waveClear: 0,
    };
  }

  const hasPhysical = picks.some((champion) => champion.damageType === "Physical" || champion.damageType === "Mixed");
  const hasMagic = picks.some((champion) => champion.damageType === "Magic" || champion.damageType === "Mixed");
  const damageBalance = hasPhysical && hasMagic ? 100 : 60;
  const scaling = picks.reduce((score, champion) => score + tierScore[champion.tier], 0) / picks.length;

  return {
    damageBalance,
    frontline: tagScore(picks, ["Tank", "Bruiser", "Frontline"], 20),
    engage: tagScore(picks, ["Engage", "Dive", "Initiator", "Knockup"], 20),
    peel: tagScore(picks, ["Peel", "Shield", "Heal", "Disengage"], 20),
    crowdControl: tagScore(picks, ["Stun", "Root", "Knockup", "Slow", "Suppression"], 15),
    scaling: clampScore(scaling),
    earlyGame: tagScore(picks, ["Early", "Bully", "Poke"], 20),
    waveClear: tagScore(picks, ["WaveClear", "AoE", "Poke"], 20),
  };
};
