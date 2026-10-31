import type { TeamAnalysis } from "../types/Analysis";
import type { Champion } from "../types/Champion";

const clampScore = (score: number) => Math.max(0, Math.min(100, Math.round(score)));

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
      completeness: 0,
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

  const physical = picks.reduce((total, champion) => total + (champion.damageType === "Physical" ? 1 : champion.damageType === "Mixed" ? 0.5 : 0), 0);
  const magic = picks.reduce((total, champion) => total + (champion.damageType === "Magic" ? 1 : champion.damageType === "Mixed" ? 0.5 : 0), 0);
  const rawDamageBalance = 100 - (Math.abs(physical - magic) / Math.max(physical + magic, 1)) * 70;
  const damageBalance = clampScore(rawDamageBalance * (0.6 + Math.min(picks.length, 5) * 0.08));
  const scaling = tagScore(picks, ["Scaling", "Marksman", "Mage"], 18);

  return {
    completeness: picks.length * 20,
    damageBalance,
    frontline: tagScore(picks, ["Tank", "Bruiser", "Frontline"], 20),
    engage: tagScore(picks, ["Engage", "Dive", "Initiator", "Knockup"], 20),
    peel: tagScore(picks, ["Peel", "Shield", "Heal", "Disengage"], 20),
    crowdControl: tagScore(picks, ["Stun", "Root", "Knockup", "Slow", "Suppression"], 15),
    scaling,
    earlyGame: tagScore(picks, ["Early", "Bully", "Poke"], 20),
    waveClear: tagScore(picks, ["WaveClear", "AoE", "Poke"], 20),
  };
};
