import { analyzeTeam } from "./analysisService";
import type { Champion, ChampionTier, Role } from "../types/Champion";

export type Recommendation = {
  champion: Champion;
  score: number;
  reasons: string[];
};

const tierScore: Record<ChampionTier, number> = {
  S: 30,
  A: 24,
  B: 18,
  C: 10,
  D: 4,
};

const gapReasons: {
  key: keyof ReturnType<typeof analyzeTeam>;
  threshold: number;
  tags: string[];
  reason: string;
}[] = [
  { key: "frontline", threshold: 45, tags: ["Tank", "Bruiser", "Frontline"], reason: "Adiciona frontline" },
  { key: "engage", threshold: 45, tags: ["Engage", "Dive", "Initiator"], reason: "Melhora engage" },
  { key: "peel", threshold: 40, tags: ["Peel", "Shield", "Heal", "Disengage"], reason: "Protege carries aliados" },
  { key: "crowdControl", threshold: 40, tags: ["Stun", "Root", "Knockup", "Slow", "Suppression"], reason: "Aumenta controle de grupo" },
  { key: "waveClear", threshold: 40, tags: ["WaveClear", "AoE", "Poke"], reason: "Ajuda no wave clear" },
];

export const getRecommendations = (
  allyPicks: Champion[],
  enemyPicks: Champion[],
  available: Champion[],
  roleNeeded: Role,
): Recommendation[] => {
  const analysis = analyzeTeam(allyPicks);
  const enemyIds = enemyPicks.map((champion) => champion.id);
  const allyIds = allyPicks.map((champion) => champion.id);

  return available
    .filter((champion) => champion.roles.includes(roleNeeded))
    .map((champion) => {
      const reasons: string[] = [];
      let score = tierScore[champion.tier];

      gapReasons.forEach((gap) => {
        const analysisValue = analysis[gap.key];
        const fillsGap = analysisValue < gap.threshold && champion.tags.some((tag) => gap.tags.includes(tag));
        if (fillsGap) {
          score += 14;
          reasons.push(gap.reason);
        }
      });

      const counteredEnemies = enemyPicks.filter((enemy) => champion.counters.includes(enemy.id));
      counteredEnemies.forEach((enemy) => {
        score += 16;
        reasons.push(`Countera ${enemy.name} do inimigo`);
      });

      const synergies = allyPicks.filter((ally) => champion.goodWith.includes(ally.id) || ally.goodWith.includes(champion.id));
      synergies.forEach((ally) => {
        score += 10;
        reasons.push(`Sinergiza com ${ally.name}`);
      });

      if (champion.damageType === "Mixed") {
        score += 8;
        reasons.push("Flexibiliza o dano da composição");
      }

      if (enemyIds.some((enemyId) => champion.weakAgainst.includes(enemyId))) {
        score -= 14;
      }

      if (allyIds.length === 0 && champion.tier === "S") {
        reasons.push("Prioridade alta de tier");
      }

      if (reasons.length === 0) {
        reasons.push(`Tier ${champion.tier} sólido para ${roleNeeded}`);
      }

      return {
        champion,
        score: Math.max(0, Math.min(100, Math.round(score))),
        reasons: reasons.slice(0, 4),
      };
    })
    .sort((a, b) => b.score - a.score);
};
