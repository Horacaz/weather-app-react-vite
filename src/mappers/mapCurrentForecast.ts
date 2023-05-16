import { IUnparsedCurrentForecast, IParsedCurrentForecast } from "../types/Forecast";

export default function mapCurrentForecast(apiData: IUnparsedCurrentForecast[]): IParsedCurrentForecast{
    const weatherDescription = apiData[0].WeatherText;
    const temperature = apiData[0].Temperature.Metric.Value;
    const time = apiData[0].LocalObservationDateTime;
    return {weatherDescription, time, temperature};
}