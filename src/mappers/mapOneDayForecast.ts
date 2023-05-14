import { IParsedDailyForecast, IUnparsedDailyForecast } from "../types/Forecast";

export function mapDailyForecast(apiData: IUnparsedDailyForecast[]): IParsedDailyForecast{
const date = apiData[0].Date;
const temperature = {
    min: apiData[0].Temperature.Minimum.Value, 
    max:apiData[0].Temperature.Maximum.Value
};
const realFeelTemperature = {
    min: apiData[0].RealFeelTemperature.Minimum.Value, 
    max:apiData[0].RealFeelTemperature.Maximum.Value
};

const day = {
    forecast: apiData[0].Day.LongPhrase,
    precipitation: apiData[0].Day.PrecipitationProbability,
    wind: {
        speed: apiData[0].Day.Wind.Speed.Value,
        direction: apiData[0].Day.Wind.Direction.English,
    }
}
const night = {
    forecast: apiData[0].Night.LongPhrase,
    precipitation: apiData[0].Night.PrecipitationProbability,
    wind: {
        speed: apiData[0].Night.Wind.Speed.Value,
        direction: apiData[0].Night.Wind.Direction.English,
    }
}
return {date, temperature, realFeelTemperature, day, night};
}