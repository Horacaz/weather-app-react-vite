import { UnparsedCityLocation, ParsedCityLocation } from "../types/cityKey";
export default function mapCityLocation(apiData : UnparsedCityLocation): ParsedCityLocation{
    const key = apiData.Key;
    const country = apiData.Country.EnglishName
    const administrativeArea = apiData.AdministrativeArea.EnglishName
    const parentCity = apiData.ParentCity.EnglishName
return {key, country, administrativeArea, parentCity}
}