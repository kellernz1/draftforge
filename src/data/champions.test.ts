import { describe, expect, it } from "vitest";
import { champions } from "./champions";

describe("champion dataset", () => {
  it("includes Locke with the official Data Dragon identity", () => {
    const locke = champions.find((champion) => champion.id === "locke");
    expect(locke).toMatchObject({
      name: "Locke",
      roles: ["Mid"],
      damageType: "Magic",
      tier: "A",
    });
    expect(locke?.tags).toEqual(expect.arrayContaining(["Assassin", "Mage"]));
  });

  it("keeps champion ids unique", () => {
    expect(new Set(champions.map((champion) => champion.id)).size).toBe(champions.length);
  });
});
