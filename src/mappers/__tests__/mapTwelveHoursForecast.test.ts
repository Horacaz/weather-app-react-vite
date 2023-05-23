import { describe, expect, test } from "vitest";
import { IParsedTwelveHoursForecast } from "../../types/Forecast";
import twelveHoursForecastMock from "../../../fixtures/twelveHoursForecast.json";
import mapTwelveHoursForecast from "../mapTwelveHoursForecast";

const twelveHoursForecastFixture = twelveHoursForecastMock;
const expectTwelveHoursForecast: IParsedTwelveHoursForecast[] = [
  {
    date: "2023-05-16T12:00:00-03:00",
    precipitation: 0,
    temperature: 23,
    weatherDescription: "Sunny",
  },
  {
    date: "2023-05-16T13:00:00-03:00",
    precipitation: 0,
    temperature: 24.9,
    weatherDescription: "Sunny",
  },
  {
    date: "2023-05-16T14:00:00-03:00",
    precipitation: 0,
    temperature: 26.4,
    weatherDescription: "Sunny",
  },
  {
    date: "2023-05-16T15:00:00-03:00",
    precipitation: 0,
    temperature: 27.2,
    weatherDescription: "Sunny",
  },
  {
    date: "2023-05-16T16:00:00-03:00",
    precipitation: 0,
    temperature: 26.9,
    weatherDescription: "Partly sunny",
  },
  {
    date: "2023-05-16T17:00:00-03:00",
    precipitation: 0,
    temperature: 26,
    weatherDescription: "Intermittent clouds",
  },
  {
    date: "2023-05-16T18:00:00-03:00",
    precipitation: 0,
    temperature: 24.2,
    weatherDescription: "Cloudy",
  },
  {
    date: "2023-05-16T19:00:00-03:00",
    precipitation: 0,
    temperature: 22.7,
    weatherDescription: "Mostly cloudy",
  },
  {
    date: "2023-05-16T20:00:00-03:00",
    precipitation: 0,
    temperature: 21.3,
    weatherDescription: "Mostly cloudy",
  },
  {
    date: "2023-05-16T21:00:00-03:00",
    precipitation: 0,
    temperature: 20.1,
    weatherDescription: "Mostly cloudy",
  },
  {
    date: "2023-05-16T22:00:00-03:00",
    precipitation: 0,
    temperature: 19.6,
    weatherDescription: "Mostly cloudy",
  },
  {
    date: "2023-05-16T23:00:00-03:00",
    precipitation: 0,
    temperature: 19.2,
    weatherDescription: "Mostly cloudy",
  },
];
describe("mapExtendedForecast", () => {
  test("Returns an IParsedTwelveHoursForecast object when valid parameters are passed on", () => {
    expect(mapTwelveHoursForecast(twelveHoursForecastFixture)).toEqual(
      expectTwelveHoursForecast
    );
  });
});
