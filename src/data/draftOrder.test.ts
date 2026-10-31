import { describe, expect, it } from "vitest";
import { draftOrder } from "./draftOrder";

describe("draftOrder", () => {
  it("uses the competitive 20-step sequence", () => {
    expect(draftOrder).toHaveLength(20);
    expect(draftOrder.slice(0, 6).map((step) => step.team)).toEqual(["blue", "red", "blue", "red", "blue", "red"]);
    expect(draftOrder.slice(6, 12).map((step) => step.team)).toEqual(["blue", "red", "red", "blue", "blue", "red"]);
    expect(draftOrder.slice(12, 16).map((step) => step.team)).toEqual(["red", "blue", "red", "blue"]);
    expect(draftOrder.slice(16).map((step) => step.team)).toEqual(["red", "blue", "blue", "red"]);
    expect(draftOrder.slice(0, 6).every((step) => step.action === "ban")).toBe(true);
  });
});
