export interface IUnparsedCurrentForecast {
  WeatherText: string;
  WeatherIcon: number;
  Temperature: {
    Metric: { Value: number };
  };
  LocalObservationDateTime: string;
  RealFeelTemperature: {
    Metric: { Value: number };
  };
  RelativeHumidity: number;
  Wind: {
    Direction: {
      English: string;
    };
    Speed: {
      Metric: {
        Value: number;
      };
    };
  };
  Pressure: {
    Metric: {
      Value: number;
    };
  };
}

export interface IParsedCurrentForecast {
  weatherDescription: string;
  temperature: number;
  time: string;
  icon: string;
  realTemperature: number;
  humidity: number;
  wind: {
    direction: string;
    speed: number;
  };
  pressure: number;
  temperatureIcon: string;
  windIcon: string;
  precipitationIcon: string;
  pressureIcon: string;
}

export interface IUnparsedDailyForecast {
  DailyForecasts: {
    Date: string;
    Temperature: {
      Minimum: { Value: number };
      Maximum: { Value: number };
    };
    RealFeelTemperature: {
      Minimum: { Value: number; Phrase: string };
      Maximum: { Value: number; Phrase: string };
    };
    Day: {
      Icon: number;
      IconPhrase: string;
      LongPhrase: string;
      PrecipitationProbability: number;
      Wind: {
        Speed: { Value: number };
        Direction: { English: string };
      };
      WindGust: {
        Speed: { Value: number };
        Direction: { English: string };
      };
    };
    Night: {
      Icon: number;
      IconPhrase: string;
      LongPhrase: string;
      PrecipitationProbability: number;
      Wind: {
        Speed: { Value: number };
        Direction: { English: string };
      };
    };
  }[];
}
export interface IParsedDailyForecast {
  date: string;
  icon: {
    temperature: string;
    precipitation: string;
    wind: string;
  };
  temperature: {
    min: number;
    max: number;
  };
  realFeelTemperature: {
    min: number;
    max: number;
  };
  day: {
    icon: string;
    iconDescription: string;
    forecast: string;
    precipitation: number;
    wind: {
      speed: number;
      direction: string;
    };
  };
  night: {
    icon: number;
    iconDescription: string;
    forecast: string;
    precipitation: number;
    wind: {
      speed: number;
      direction: string;
    };
  };
}
export interface IUnparsedTwelveHoursForecast {
  DateTime: string;
  IconPhrase: string;
  Temperature: {
    Value: number;
  };
  PrecipitationProbability: number;
}
export interface IParsedTwelveHoursForecast {
  date: string;
  weatherDescription: string;
  temperature: number;
  precipitation: number;
}
