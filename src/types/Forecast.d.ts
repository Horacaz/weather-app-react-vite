export interface IUnparsedCurrentForecast {
    WeatherText: string,
    Temperature: {
        Metric: {Value: number},
    },
    LocalObservationDateTime: string,
}

export interface IParsedCurrentForecast {
    weatherDescription: string,
    temperature: number,
    time: string,
}

export interface IUnparsedDailyForecast{
    DailyForecasts: {
        Date: string,
        Temperature: {
            Minimum: {Value: number},
            Maximum: {Value: number},
        },
        RealFeelTemperature: {
            Minimum: {Value: number, 
                Phrase: string},
            Maximum: {Value: number, 
                Phrase: string},
        },
        Day: {
            LongPhrase: string,
            PrecipitationProbability: number,
            Wind: {
                Speed: { Value: number},
                Direction: {English: string}
            },
            WindGust: {
                Speed: { Value: number},
                Direction: {English: string}
            }
        },
        Night: {
            LongPhrase: string,
            PrecipitationProbability: number,
            Wind: {
                Speed: { Value: number},
                Direction: {English: string}
            },
        }
    }[];
}
export interface IParsedDailyForecast{
        date: string,
        temperature: {
            min: number, 
            max: number
        },
        realFeelTemperature: {
            min: number, 
            max: number
        },
        day: {
            forecast: string, 
            precipitation: number, 
            wind: {
                speed: number, 
                direction: string}
        },
        night: {
            forecast: string, 
            precipitation: number, 
            wind: {
                speed: number, 
                direction: string}
        },
}
export interface IUnparsedTwelveHoursForecast{
    DateTime: string,
    IconPhrase: string,
    Temperature: {
        Value: number
    },
    PrecipitationProbability: number,
}
export interface IParsedTwelveHoursForecast{
    date: string,
    weatherDescription: string,
    temperature: number,
    precipitation: number,
}
export interface IParsedExtendedForecast{
    extendedForecast: IParsedDailyForecast[],
}
