import { IUnparsedCityLocation } from "../types/cityKey";
const API_KEY = "GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X";

export default function getCityKey(
  cityQuery: string
): Promise<IUnparsedCityLocation[]> {
  const params = new URLSearchParams({ apikey: API_KEY, q: cityQuery });
  const URL = `https://dataservice.accuweather.com/locations/v1/cities/search?${params}`;
  const result = fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  return result;
}
