import { describe, expect, test } from "vitest";
import { IParsedDailyForecast } from "../../types/Forecast";
import extendedForecastMock from "../../../fixtures/extendedForecast.json";
import mapExtendedForecast from "../mapExtendedForecast";

const extendedForecastFixture = extendedForecastMock;
const expectedExtendedForecast: IParsedDailyForecast[] = [
  {
    date: "2023-05-16T07:00:00-03:00",
    day: {
      icon: 2,
      iconDescription: "Mostly sunny",
      forecast: "Mostly sunny and very warm",
      precipitation: 0,
      wind: {
        direction: "NNE",
        speed: 16.7,
      },
    },
    night: {
      icon: 35,
      iconDescription: "Partly cloudy",
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
  },
];

describe("mapExtendedForecast", () => {
  test("Returns a ParsedExtendedForecast object when valid parameters are passed on", () => {
    expect(mapExtendedForecast(extendedForecastFixture)).toEqual(
      expectedExtendedForecast
    );
  });
});
