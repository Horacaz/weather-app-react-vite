import { IParsedTwelveHoursForecast, IUnparsedTwelveHoursForecast } from "../types/Forecast";
export function mapTwelveHoursForecast(apiData: IUnparsedTwelveHoursForecast[]): IParsedTwelveHoursForecast[]{

    const twelveHoursForecast = apiData.map( forecast => ({
        date: forecast.DateTime,
        weatherDescription: forecast.IconPhrase,
        temperature: forecast.Temperature.Value,
        precipitation: forecast.PrecipitationProbability,
    }))

 return twelveHoursForecast;
}