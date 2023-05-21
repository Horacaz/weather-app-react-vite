import {
  IUnparsedDailyForecast,
  IParsedDailyForecast,
} from "../types/Forecast";
import getForecastImages from "../helpers/getForecastImage";

export default function mapExtendedForecast(
  apiData: IUnparsedDailyForecast
): IParsedDailyForecast[] {
  const temperatureIcon = getForecastImages("temperature");
  const windIcon = getForecastImages("wind");
  const precitipationIcon = getForecastImages("precipitation");

  const extendedForecast = apiData.DailyForecasts.map((forecast) => ({
    date: new Date(forecast.Date).toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
    icon: {
      temperature: temperatureIcon,
      wind: windIcon,
      precipitation: precitipationIcon,
    },
    temperature: {
      min: forecast.Temperature.Minimum.Value,
      max: forecast.Temperature.Maximum.Value,
    },
    realFeelTemperature: {
      min: forecast.RealFeelTemperature.Minimum.Value,
      max: forecast.RealFeelTemperature.Maximum.Value,
    },
    day: {
      icon: getForecastImages(forecast.Day.Icon),
      iconDescription: forecast.Day.IconPhrase,
      forecast: forecast.Day.LongPhrase,
      precipitation: forecast.Day.PrecipitationProbability,
      wind: {
        speed: forecast.Day.Wind.Speed.Value,
        direction: forecast.Day.Wind.Direction.English,
      },
    },
    night: {
      icon: forecast.Night.Icon,
      iconDescription: forecast.Night.IconPhrase,
      forecast: forecast.Night.LongPhrase,
      precipitation: forecast.Night.PrecipitationProbability,
      wind: {
        speed: forecast.Night.Wind.Speed.Value,
        direction: forecast.Night.Wind.Direction.English,
      },
    },
  }));
  return extendedForecast;
}
