import { describe, expect, test } from "vitest";
import { IParsedDailyForecast } from "../../types/Forecast";
import dailyForecastMock from "../../../fixtures/dailyForecast.json";
import mapDailyForecast from "../mapOneDayForecast";

const dailyForecastFixture = dailyForecastMock;
const expectedDailyForecast: IParsedDailyForecast = {
  date: "2023-05-16T07:00:00-03:00",
  day: {
    forecast: "Mostly sunny and very warm",
    precipitation: 0,
    wind: {
      direction: "NNE",
      speed: 16.7,
    },
  },
  night: {
    forecast: "Patchy clouds",
    precipitation: 0,
    wind: {
      direction: "NNE",
      speed: 14.8,
    },
  },
  realFeelTemperature: {
    max: 26.4,
    min: 12.9,
  },
  temperature: {
    max: 27.2,
    min: 13.8,
  },
};

describe("mapExtendedForecast", () => {
  test("Returns a ParsedDailyForecast object when valid parameters are passed on", () => {
    expect(mapDailyForecast(dailyForecastFixture)).toEqual(
      expectedDailyForecast
    );
  });
});
