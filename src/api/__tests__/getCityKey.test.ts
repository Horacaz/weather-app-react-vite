import { IUnparsedCityLocation } from "../../types/cityKey";
import { describe, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import getCityKey from "../getCityKey";

const fetchMocker = createFetchMock(vi);
beforeEach(() => {
  fetchMocker.doMock();
});
describe("getCityKey", () => {
  test("should have been called with a valid cityQuery", async () => {
    const cityQuery = "New York";
    getCityKey(cityQuery);
  });
});
