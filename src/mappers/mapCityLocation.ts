import { IUnparsedCityLocation, IParsedCityLocation } from "../types/cityKey";
export default function mapCityLocation(
  apiData: IUnparsedCityLocation[]
): IParsedCityLocation {
  const data = apiData[0];
  const key = data.Key;
  const country = data.Country.EnglishName;
  const administrativeArea = data.AdministrativeArea.EnglishName;
  return { key, country, administrativeArea };
}
