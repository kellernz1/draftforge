export type Role = "Top" | "Jungle" | "Mid" | "ADC" | "Support";
export type DamageType = "Physical" | "Magic" | "Mixed";
export type ChampionTier = "S" | "A" | "B" | "C" | "D";

export type Champion = {
  id: string;
  name: string;
  roles: Role[];
  damageType: DamageType;
  tags: string[];
  tier: ChampionTier;
  counters: string[];
  goodWith: string[];
  weakAgainst: string[];
  notes?: string;
};
