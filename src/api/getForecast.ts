import { IUnparsedCurrentForecast } from "../types/Forecast";

const API_KEY = "GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X";
export async function getCurrentForecast(
  locationKey: string
): Promise<IUnparsedCurrentForecast[]> {
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return result;
}
export async function getTwelveHoursForecast(locationKey: string) {
  const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}&details=true&metric=true`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return result;
}

export async function getFiveDaysForecast(locationKey: string) {
  const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=true&metric=true`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return result;
}
