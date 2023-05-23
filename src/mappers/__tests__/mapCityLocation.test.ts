import { describe, expect, test } from "vitest";
import { IParsedCityLocation } from "../../types/cityKey";
import cityLocationMock from "../../../fixtures/cityLocation.json";
import mapCityLocation from "../mapCityLocation";

const cityLocationFixture = cityLocationMock;
const expectedOutput: IParsedCityLocation = {
  key: "1-11221_1_AL",
  country: "Argentina",
  administrativeArea: "Santa Fe",
};
describe("mapCityLocation", () => {
  test("Returns an IParsedCityLocation object when valid parameters are passed on", () => {
    expect(mapCityLocation(cityLocationFixture)).toEqual(expectedOutput);
  });
});
