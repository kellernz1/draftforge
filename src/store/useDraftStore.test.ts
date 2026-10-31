import { beforeEach, describe, expect, it } from "vitest";
import { useDraftStore } from "./useDraftStore";

const ids = Array.from({ length: 20 }, (_, index) => `champion-${index}`);

describe("useDraftStore", () => {
  beforeEach(() => {
    useDraftStore.getState().backToModeSelect();
    useDraftStore.getState().clearArchivedDrafts();
  });

  it("supports a preferred role and flex reassignment", () => {
    useDraftStore.getState().selectMode("normal");
    ids.slice(0, 6).forEach((id) => useDraftStore.getState().selectChampion(id));
    useDraftStore.getState().selectChampion(ids[6], "ADC");
    expect(useDraftStore.getState().blueTeam.picks.find((pick) => pick.role === "ADC")?.championId).toBe(ids[6]);
    expect(useDraftStore.getState().blueTeam.pickOrder).toEqual([ids[6]]);
    useDraftStore.getState().assignPickRole("blue", ids[6], "Mid");
    expect(useDraftStore.getState().blueTeam.picks.find((pick) => pick.role === "Mid")?.championId).toBe(ids[6]);
    expect(useDraftStore.getState().blueTeam.pickOrder).toEqual([ids[6]]);
  });

  it("keeps each team's picks in chronological order instead of lane order", () => {
    useDraftStore.getState().selectMode("normal");
    ids.slice(0, 6).forEach((id) => useDraftStore.getState().selectChampion(id));
    useDraftStore.getState().selectChampion(ids[6], "ADC");
    useDraftStore.getState().selectChampion(ids[7], "Support");
    useDraftStore.getState().selectChampion(ids[8], "Mid");
    useDraftStore.getState().selectChampion(ids[9], "Jungle");
    useDraftStore.getState().selectChampion(ids[10], "Top");

    expect(useDraftStore.getState().blueTeam.pickOrder).toEqual([ids[6], ids[9], ids[10]]);
    expect(useDraftStore.getState().redTeam.pickOrder).toEqual([ids[7], ids[8]]);
  });

  it("undoes a selection without losing mode", () => {
    useDraftStore.getState().selectMode("fearless");
    useDraftStore.getState().selectChampion(ids[0]);
    useDraftStore.getState().undoLastStep();
    expect(useDraftStore.getState().stepIndex).toBe(0);
    expect(useDraftStore.getState().mode).toBe("fearless");
  });
});
