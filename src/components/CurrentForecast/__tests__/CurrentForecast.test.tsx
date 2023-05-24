import { IParsedCurrentForecast } from "../../../types/Forecast";
import { test, describe } from "vitest";
import {render, screen} from '@testing-library/react'
import CurrentForecast from "../CurrentForecast";

const props: IParsedCurrentForecast = {
    "weatherDescription": "Cloudy",
    "time": "Wed May 24 2023",
    "temperature": 21.2,
    "icon": "/weather-app-react-vite/src/assets/7.svg",
    "realTemperature": 20.5,
    "humidity": 88,
    "wind": {
        "direction": "NNE",
        "speed": 18.8
    },
    "pressure": 1009.5,
    "temperatureIcon": "/weather-app-react-vite/src/assets/temperature.svg",
    "windIcon": "/weather-app-react-vite/src/assets/wind.svg",
    "precipitationIcon": "/weather-app-react-vite/src/assets/precipitation.svg",
    "pressureIcon": "/weather-app-react-vite/src/assets/pressure.svg"
}

describe("CurrentForecast", () => {
    test("should render current forecast when provided with valid props", () => {
        render(<CurrentForecast {...props}/>)
        screen.findByText("Cloudy");
        screen.findByText("Wed May 24 2023");
        screen.findByText("Feels like: 20.5°c");
    })
})
