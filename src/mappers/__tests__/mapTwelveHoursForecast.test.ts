import { describe, expect, test } from "vitest";
import { IParsedTwelveHoursForecast, IUnparsedTwelveHoursForecast } from "../../types/Forecast";
import mapTwelveHoursForecast from "../mapTwelveHoursForecast";

const twelveHoursForecastMock: IUnparsedTwelveHoursForecast[] = [{
DateTime: "2023-05-16T12:00:00-03:00",
IconPhrase: "Sunny",
Temperature: {
  Value: 23,
},
PrecipitationProbability: 0,
}];

const expectTwelveHoursForecast: IParsedTwelveHoursForecast[] = [
  {
    date: "2023-05-16T12:00:00-03:00",
    precipitation: 0,
    temperature: 23,
    weatherDescription: "Sunny",
    precipitationIcon: '/weather-app-react-vite/src/assets/precipitation.svg',
    temperatureIcon: '/weather-app-react-vite/src/assets/temperature.svg',
  }
];
describe("mapExtendedForecast", () => {
  test("Returns an IParsedTwelveHoursForecast object when valid parameters are passed on", () => {
    expect(mapTwelveHoursForecast(twelveHoursForecastMock)).toEqual(
      expectTwelveHoursForecast
    );
  });
});
