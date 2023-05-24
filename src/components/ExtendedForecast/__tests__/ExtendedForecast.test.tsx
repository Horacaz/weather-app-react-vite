import { describe, test } from "vitest";
import { screen, render } from "@testing-library/react";
import { IParsedDailyForecast } from "../../../types/Forecast";
import ExtendedForecast from "../ExtendedForecast";
const extendedForecast: IParsedDailyForecast[] = [
  {
    date: "Wednesday, May 24",
    icon: {
      temperature: "/weather-app-react-vite/src/assets/temperature.svg",
      wind: "/weather-app-react-vite/src/assets/wind.svg",
      precipitation: "/weather-app-react-vite/src/assets/precipitation.svg",
    },
    temperature: {
      min: 18.9,
      max: 23.3,
    },
    realFeelTemperature: {
      min: 16.4,
      max: 23.4,
    },
    day: {
      icon: "/weather-app-react-vite/src/assets/15.svg",
      iconDescription: "Thunderstorms",
      forecast: "Cloudy and humid with showers and thunderstorms",
      precipitation: 100,
      wind: {
        speed: 13,
        direction: "N",
      },
    },
    night: {
      icon: "/weather-app-react-vite/src/assets/15.svg",
      iconDescription: "Thunderstorms",
      forecast:
        "Warm and humid with considerable clouds; a strong thunderstorm in spots late",
      precipitation: 77,
      wind: {
        speed: 11.1,
        direction: "NNE",
      },
    },
  },
  {
    date: "Thursday, May 25",
    icon: {
      temperature: "/weather-app-react-vite/src/assets/temperature.svg",
      wind: "/weather-app-react-vite/src/assets/wind.svg",
      precipitation: "/weather-app-react-vite/src/assets/precipitation.svg",
    },
    temperature: {
      min: 19.1,
      max: 27,
    },
    realFeelTemperature: {
      min: 18.1,
      max: 26.8,
    },
    day: {
      icon: "/weather-app-react-vite/src/assets/15.svg",
      iconDescription: "Thunderstorms",
      forecast:
        "Considerable cloudiness with a thunderstorm; very warm and humid",
      precipitation: 91,
      wind: {
        speed: 13,
        direction: "N",
      },
    },
    night: {
      icon: "/weather-app-react-vite/src/assets/15.svg",
      iconDescription: "Thunderstorms",
      forecast:
        "Warm with considerable cloudiness; a couple of evening thunderstorms followed by a shower late",
      precipitation: 96,
      wind: {
        speed: 14.8,
        direction: "N",
      },
    },
  },
  {
    date: "Friday, May 26",
    icon: {
      temperature: "/weather-app-react-vite/src/assets/temperature.svg",
      wind: "/weather-app-react-vite/src/assets/wind.svg",
      precipitation: "/weather-app-react-vite/src/assets/precipitation.svg",
    },
    temperature: {
      min: 12.2,
      max: 24.1,
    },
    realFeelTemperature: {
      min: 11.4,
      max: 25.4,
    },
    day: {
      icon: "/weather-app-react-vite/src/assets/13.svg",
      iconDescription: "Mostly cloudy w/ showers",
      forecast:
        "More clouds than sun; warm with a couple of showers, mainly early in the day",
      precipitation: 96,
      wind: {
        speed: 11.1,
        direction: "WSW",
      },
    },
    night: {
      icon: "/weather-app-react-vite/src/assets/34.svg",
      iconDescription: "Mostly clear",
      forecast: "Clear to partly cloudy and cooler",
      precipitation: 6,
      wind: {
        speed: 16.7,
        direction: "SSE",
      },
    },
  },
  {
    date: "Saturday, May 27",
    icon: {
      temperature: "/weather-app-react-vite/src/assets/temperature.svg",
      wind: "/weather-app-react-vite/src/assets/wind.svg",
      precipitation: "/weather-app-react-vite/src/assets/precipitation.svg",
    },
    temperature: {
      min: 3.7,
      max: 17.4,
    },
    realFeelTemperature: {
      min: 2.2,
      max: 16.1,
    },
    day: {
      icon: "/weather-app-react-vite/src/assets/6.svg",
      iconDescription: "Mostly cloudy",
      forecast:
        "A morning shower in places; otherwise, cooler with more clouds than sun",
      precipitation: 43,
      wind: {
        speed: 20.4,
        direction: "SE",
      },
    },
    night: {
      icon: "/weather-app-react-vite/src/assets/34.svg",
      iconDescription: "Mostly clear",
      forecast: "Colder with patchy clouds",
      precipitation: 0,
      wind: {
        speed: 14.8,
        direction: "SE",
      },
    },
  },
  {
    date: "Sunday, May 28",
    icon: {
      temperature: "/weather-app-react-vite/src/assets/temperature.svg",
      wind: "/weather-app-react-vite/src/assets/wind.svg",
      precipitation: "/weather-app-react-vite/src/assets/precipitation.svg",
    },
    temperature: {
      min: 2.8,
      max: 14.7,
    },
    realFeelTemperature: {
      min: 3.1,
      max: 15.4,
    },
    day: {
      icon: "/weather-app-react-vite/src/assets/1.svg",
      iconDescription: "Sunny",
      forecast: "Plenty of sunshine",
      precipitation: 0,
      wind: {
        speed: 9.3,
        direction: "SE",
      },
    },
    night: {
      icon: "/weather-app-react-vite/src/assets/35.svg",
      iconDescription: "Partly cloudy",
      forecast: "Partly cloudy and chilly",
      precipitation: 0,
      wind: {
        speed: 7.4,
        direction: "ESE",
      },
    },
  },
];
describe("ExtendedForecast", () => {
  test("It should render multiple cards with information about extended forecast", () => {
    render(<ExtendedForecast extendedForecast={extendedForecast} />);
    screen.findByText("Thunderstorms");
    screen.findByText("Mostly cloudy");
    screen.findByText("Sunny");
  });
});
