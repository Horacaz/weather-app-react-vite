import {
  IParsedTwelveHoursForecast,
  IUnparsedTwelveHoursForecast,
} from "../types/Forecast";

import getForecastImages from "../helpers/getForecastImage";
const temperatureIcon = getForecastImages("temperature");
const precitipationIcon = getForecastImages("precipitation");

export default function mapTwelveHoursForecast(
  apiData: IUnparsedTwelveHoursForecast[]
): IParsedTwelveHoursForecast[] {
  const twelveHoursForecast = apiData.map((forecast) => ({
    date: new Date(forecast.DateTime).toLocaleTimeString('en-US'),
    weatherDescription: forecast.IconPhrase,
    temperature: forecast.Temperature.Value,
    precipitation: forecast.PrecipitationProbability,
    temperatureIcon: temperatureIcon,
    precipitationIcon: precitipationIcon,
    icon:  getForecastImages(forecast.WeatherIcon),
  }));

  return twelveHoursForecast;
}
