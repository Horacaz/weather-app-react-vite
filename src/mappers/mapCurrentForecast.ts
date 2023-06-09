import {
  IUnparsedCurrentForecast,
  IParsedCurrentForecast,
} from "../types/Forecast";
import getForecastImages from "../helpers/getForecastImage";

export default function mapCurrentForecast(
  apiData: IUnparsedCurrentForecast[]
): IParsedCurrentForecast {
  const data = apiData[0];
  const weatherDescription = data.WeatherText;
  const temperature = data.Temperature.Metric.Value;
  const time = new Date(data.LocalObservationDateTime).toDateString();
  const icon = getForecastImages(data.WeatherIcon);
  const realTemperature = data.RealFeelTemperature.Metric.Value;
  const humidity = data.RelativeHumidity;
  const wind = {
    direction: data.Wind.Direction.English,
    speed: data.Wind.Speed.Metric.Value,
  };
  const pressure = data.Pressure.Metric.Value;
  const temperatureIcon = getForecastImages("temperature");
  const windIcon = getForecastImages("wind");
  const precipitationIcon = getForecastImages("precipitation");
  const pressureIcon = getForecastImages("pressure");
  return {
    weatherDescription,
    time,
    temperature,
    icon,
    realTemperature,
    humidity,
    wind,
    pressure,
    temperatureIcon,
    windIcon,
    precipitationIcon,
    pressureIcon,
  };
}
