import { screen, render } from "@testing-library/react";
import { describe, test } from "vitest";
import TwelveHoursForecast from "../TwelveHoursForecast";

const propsMock = [
  {
    date: "11:00:00 AM",
    weatherDescription: "Intermittent clouds",
    temperature: 16.2,
    precipitation: 0,
    temperatureIcon: "/weather-app-react-vite/src/assets/temperature.svg",
    precipitationIcon: "/weather-app-react-vite/src/assets/precipitation.svg",
    icon: "/weather-app-react-vite/src/assets/4.svg",
  },
];
describe("TwelveHoursForecast", () => {
  test("it renders correctly", () => {
    render(<TwelveHoursForecast twelveHoursForecast={propsMock} />);
    screen.getByText("11:00:00 AM");
  });
});
