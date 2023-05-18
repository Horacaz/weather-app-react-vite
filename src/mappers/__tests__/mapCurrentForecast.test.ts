import { describe, expect, test } from "vitest";
import { IParsedCurrentForecast } from "../../types/Forecast";
import currentConditionsMock from "../../../fixtures/currentConditions.json";
import mapCurrentForecast from "../mapCurrentForecast";

const currentConditionsFixture = currentConditionsMock;
const expectedOutput: IParsedCurrentForecast = {
  humidity: 48,
  icon: 1,
  pressure: 1016.3,
  realTemperature: 23.1,
  temperature: 23.3,
  time: "Thu May 18 2023",
  weatherDescription: "Sunny",
  wind: {
    direction: 180,
    speed: 13.9,
  },
};
describe("mapCurrentForecast", () => {
  test("Returns a ParsedCurrentForecast object when valid parameters are passed on", () => {
    expect(mapCurrentForecast(currentConditionsFixture)).toEqual(
      expectedOutput
    );
  });
});
