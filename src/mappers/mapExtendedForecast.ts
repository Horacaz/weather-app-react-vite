import {IUnparsedDailyForecast, IParsedDailyForecast} from "../types/Forecast";

export default function mapExtendedForecast(apiData: IUnparsedDailyForecast): IParsedDailyForecast[]{
    const extendedForecast = apiData.DailyForecasts.map(forecast => ({
        date: forecast.Date,
        temperature: {min: forecast.Temperature.Minimum.Value, max: forecast.Temperature.Maximum.Value},
        realFeelTemperature: {min: forecast.RealFeelTemperature.Minimum.Value, max: forecast.RealFeelTemperature.Maximum.Value},
        day: {
            forecast: forecast.Day.LongPhrase,
            precipitation: forecast.Day.PrecipitationProbability,
            wind: {
                speed: forecast.Day.Wind.Speed.Value,
                direction: forecast.Day.Wind.Direction.English
            }
        },
        night: {
            forecast: forecast.Night.LongPhrase,
            precipitation: forecast.Night.PrecipitationProbability,
            wind: {
                speed: forecast.Night.Wind.Speed.Value,
                direction: forecast.Night.Wind.Direction.English
            }
        }
    }));
return extendedForecast;
}