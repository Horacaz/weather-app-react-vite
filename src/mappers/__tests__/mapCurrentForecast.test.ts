import { describe, expect, test } from "vitest";
import { IParsedCurrentForecast } from "../../types/Forecast";
import currentConditionsMock from "../../../fixtures/currentConditions.json";
import mapCurrentForecast from "../mapCurrentForecast";

const currentConditionsFixture = currentConditionsMock;
const expectedOutput: IParsedCurrentForecast = {
  humidity: 48,
  icon: "/weather-app-react-vite/src/assets/1.svg",
  temperatureIcon: "/weather-app-react-vite/src/assets/temperature.svg",
  windIcon: "/weather-app-react-vite/src/assets/wind.svg",
  precipitationIcon: "/weather-app-react-vite/src/assets/precipitation.svg",
  pressureIcon: "/weather-app-react-vite/src/assets/pressure.svg",
  pressure: 1016.3,
  realTemperature: 23.1,
  temperature: 23.3,
  time: "Thu May 18 2023",
  weatherDescription: "Sunny",
  wind: {
    direction: "S",
    speed: 13.9,
  },
};
describe("mapCurrentForecast", () => {
  test("Returns an IParsedCurrentForecast object when provided with valid parameters", () => {
    expect(mapCurrentForecast(currentConditionsFixture)).toEqual(
      expectedOutput
    );
  });
});
