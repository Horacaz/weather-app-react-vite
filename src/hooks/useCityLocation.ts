import { IParsedCityLocation } from "../types/cityKey";
import getCityKey from "../api/getCityKey";
import mapCityLocation from "../mappers/mapCityLocation";
import { useEffect, useState } from "react";
export default function useCityLocation() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<IParsedCityLocation | null>(null);
  const [cityFetch, setCityFetch] = useState("");
  const [locationKey, setLocationKey] = useState("");

  useEffect(() => {
    async function fetchCity() {
      const cityKey = await getCityKey(cityFetch);
      const mappedCity = mapCityLocation(cityKey);
      setLocation(mappedCity);
      setLocationKey(mappedCity.key);
      setLoading(false);
    }
    if (cityFetch) {
      setLoading(true);
      fetchCity();
    }
  }, [cityFetch]);

  return { loading, location, locationKey, setCityFetch };
}
