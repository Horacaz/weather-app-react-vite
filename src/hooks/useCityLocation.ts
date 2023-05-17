import { IParsedCityLocation } from "../types/cityKey";
import getCityKey from "../api/getCityKey";
import mapCityLocation from "../mappers/mapCityLocation";
import { useEffect, useState } from "react";
export default function useCityLocation() {
  const [loading, setLoading] = useState(false);
  const [cityLocation, setCityLocation] = useState<IParsedCityLocation | null>(null);
  const [cityFetch, setCityFetch] = useState("");
  const [cityKey, setCityKey] = useState("");
  
  useEffect(() => {
    async function fetchCity() {
      const cityKey = await getCityKey(cityFetch);
      const mappedCity = mapCityLocation(cityKey);
      setCityLocation(mappedCity);
      setCityKey(mappedCity.key);
      setLoading(false);
    }
    if (cityFetch) {
      setLoading(true);
      fetchCity();
    }
  }, [cityFetch]);

  return { loading, cityLocation, cityKey, setCityFetch };
}
