import { describe, expect, test } from "vitest";
import { IParsedDailyForecast } from "../../types/Forecast";
import extendedForecastMock from "../../../fixtures/extendedForecast.json";
import mapExtendedForecast from "../mapExtendedForecast";

const extendedForecastFixture = extendedForecastMock;
const expectedExtendedForecast: IParsedDailyForecast[] = [
  {
    date: 'Tuesday, May 16',
    icon: {
      precipitation: '/weather-app-react-vite/src/assets/precipitation.svg',
      temperature: '/weather-app-react-vite/src/assets/temperature.svg',
      wind: '/weather-app-react-vite/src/assets/wind.svg',
    },
    day: {
      icon: '/weather-app-react-vite/src/assets/2.svg',
      iconDescription: "Mostly sunny",
      forecast: "Mostly sunny and very warm",
      precipitation: 0,
      wind: {
        direction: "NNE",
        speed: 16.7,
      },
    },
    night: {
      icon: '/weather-app-react-vite/src/assets/35.svg',
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
  test("Returns an IParsedExtendedForecast object when provided with valid parameters", () => {
    expect(mapExtendedForecast(extendedForecastFixture)).toEqual(
      expectedExtendedForecast
    );
  });
});
