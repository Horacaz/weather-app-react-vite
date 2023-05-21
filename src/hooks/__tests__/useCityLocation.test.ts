import { describe, expect, test } from "vitest";
import useCityLocation from "../useCityLocation";
describe("useCityLocation", () => {
  test.skip("useCityLocation", () => {
    useCityLocation();
    expect(1 + 1).toBe(2);
  });
});
