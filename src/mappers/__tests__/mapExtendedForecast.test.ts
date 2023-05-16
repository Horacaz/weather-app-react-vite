import { describe, expect, test } from 'vitest'
import { IParsedDailyForecast } from "../../types/Forecast";
import extendedForecastMock from '../../../fixtures/extendedForecast.json';
import mapExtendedForecast from '../mapExtendedForecast';

const extendedForecastFixture = extendedForecastMock;
const expectedExtendedForecast: IParsedDailyForecast[] =[
  {
    date: '2023-05-16T07:00:00-03:00',
    day: {
      forecast: 'Mostly sunny and very warm',
      precipitation: 0,
      wind: {
        direction: 'NNE',
        speed: 16.7,
      },
    },
    night: {
      forecast: 'Patchy clouds',
      precipitation: 0,
      wind: {
        direction: 'NNE',
        speed: 14.8,
      },
    },
    realFeelTemperature: {
      max: 26.4,
      min: 12.9,
    },
    temperature: {
      max: 27.2,
      min: 13.8,
    },
  },
  {
    date: '2023-05-17T07:00:00-03:00',
    day: {
      forecast: 'Mostly sunny and remaining warm',
      precipitation: 2,
      wind: {
        direction: 'NNE',
        speed: 16.7,
      },
    },
    night: {
      forecast: 'Patchy clouds and mild',
      precipitation: 25,
      wind: {
        direction: 'NNW',
        speed: 11.1,
      },
    },
    realFeelTemperature: {
      max: 26.6,
      min: 15.7,
    },
    temperature: {
      max: 27,
      min: 16.1,
    },
  },
  {
    date: '2023-05-18T07:00:00-03:00',
    day: {
      forecast: 'Nice with plenty of sunshine',
      precipitation: 1,
      wind: {
        direction: 'SSW',
        speed: 11.1,
      },
    },
    night: {
      forecast: 'Partly cloudy and mild',
      precipitation: 12,
      wind: {
        direction: 'E',
        speed: 9.3,
      },
    },
    realFeelTemperature: {
      max: 23.8,
      min: 15.9,
    },
    temperature: {
      max: 23.5,
      min: 16.6,
    },
  },
  {
    date: '2023-05-19T07:00:00-03:00',
    day: {
      forecast: 'Cloudy with a passing shower in the afternoon',
      precipitation: 59,
      wind: {
        direction: 'NW',
        speed: 11.1,
      },
    },
    night: {
      forecast: 'Low clouds with a shower in spots late',
      precipitation: 45,
      wind: {
        direction: 'S',
        speed: 13,
      },
    },
    realFeelTemperature: {
      max: 21.9,
      min: 9.3,
    },
    temperature: {
      max: 22.6,
      min: 11.4,
    },
  },
  {
    date: '2023-05-20T07:00:00-03:00',
    day: {
      forecast: 'Cloudy; occasional rain and drizzle in the morning followed by a shower in spots in the afternoon',
      precipitation: 63,
      wind: {
        direction: 'SE',
        speed: 14.8,
      },
    },
    night: {
      forecast: 'Showers in the evening; otherwise, mostly cloudy',
      precipitation: 65,
      wind: {
        direction: 'E',
        speed: 11.1,
      },
    },
    realFeelTemperature: {
      max: 20.9,
      min: 9.8,
    },
    temperature: {
      max: 22.2,
      min: 11.3,
    },
  },
];

describe('mapExtendedForecast', () =>{
        test("Returns a ParsedExtendedForecast object when valid parameters are passed on", () => {
        expect(mapExtendedForecast(extendedForecastFixture)).toEqual(expectedExtendedForecast);
    });
})