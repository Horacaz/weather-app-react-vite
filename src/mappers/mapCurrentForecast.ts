import {
  IUnparsedCurrentForecast,
  IParsedCurrentForecast,
} from "../types/Forecast";

export default function mapCurrentForecast(
  apiData: IUnparsedCurrentForecast[]
): IParsedCurrentForecast {
  const data = apiData[0];
  const weatherDescription = data.WeatherText;
  const temperature = data.Temperature.Metric.Value;
  const time = new Date(data.LocalObservationDateTime).toDateString();
  const icon = data.WeatherIcon;
  const realTemperature = data.RealFeelTemperature.Metric.Value;
  const humidity = data.RelativeHumidity;
  const wind = {
    direction: data.Wind.Direction.Degrees,
    speed: data.Wind.Speed.Metric.Value,
  };
  const pressure = data.Pressure.Metric.Value;
  return { weatherDescription, time, temperature, icon, realTemperature, humidity, wind, pressure };
}
