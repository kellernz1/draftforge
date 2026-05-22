import type { Champion } from "../types/Champion";

export type CounterSuggestion = {
  champion: Champion;
  reason: string;
};

const describeCounter = (champion: Champion, targetName: string) => {
  if (champion.tags.some((tag) => ["Root", "Stun", "Suppression"].includes(tag))) {
    return `${champion.name}: controla ${targetName} e pune entradas forçadas`;
  }

  if (champion.tags.some((tag) => ["Tank", "Frontline", "Peel"].includes(tag))) {
    return `${champion.name}: absorve pressão de ${targetName} e protege a composição`;
  }

  if (champion.tags.some((tag) => ["Bully", "Early", "Poke"].includes(tag))) {
    return `${champion.name}: pressiona ${targetName} cedo e limita escala`;
  }

  return `${champion.name}: possui ferramentas favoráveis contra ${targetName}`;
};

export const getCounters = (enemyChampionId: string, available: Champion[]): CounterSuggestion[] => {
  const target = available.find((champion) => champion.id === enemyChampionId);
  const targetName = target?.name ?? enemyChampionId;

  return available
    .filter((champion) => champion.counters.includes(enemyChampionId))
    .map((champion) => ({
      champion,
      reason: describeCounter(champion, targetName),
    }))
    .slice(0, 3);
};
