import { describe, expect, it } from "vitest";
import { analyzeTeam } from "./analysisService";
import type { Champion } from "../types/Champion";

const champion = (changes: Partial<Champion>): Champion => ({
  id: "test", name: "Test", roles: ["Mid"], damageType: "Magic", tags: [], tier: "B",
  counters: [], goodWith: [], weakAgainst: [], ...changes,
});

describe("analyzeTeam", () => {
  it("reports confidence separately from composition quality", () => {
    const result = analyzeTeam([champion({ damageType: "Mixed", tags: ["Scaling"] })]);
    expect(result.completeness).toBe(20);
    expect(result.damageBalance).toBeLessThan(100);
    expect(result.scaling).toBeGreaterThan(0);
  });

  it("recognizes complementary damage and composition tools", () => {
    const result = analyzeTeam([
      champion({ id: "tank", damageType: "Magic", tags: ["Tank", "Engage", "Stun", "Frontline"] }),
      champion({ id: "carry", damageType: "Physical", tags: ["Marksman", "Scaling", "WaveClear"] }),
    ]);
    expect(result.damageBalance).toBeGreaterThan(70);
    expect(result.frontline).toBeGreaterThan(0);
    expect(result.engage).toBeGreaterThan(0);
  });
});
