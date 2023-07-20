import { IParsedCityLocation } from "../types/cityKey";
import getCityKey from "../api/getCityKey";
import mapCityLocation from "../mappers/mapCityLocation";
import { useEffect, useState } from "react";
import getUserLocation from "../api/getUserLocation";

type userAdress = {
  city: string,
  country: string,
}
export default function useCityLocation() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<IParsedCityLocation | null>(null);
  const [cityFetch, setCityFetch] = useState("");
  const [locationKey, setLocationKey] = useState("");

  useEffect(() => {
  async function getUserPublicAddress(){
    const userPublicLocation: userAdress = await getUserLocation();
    fetchCity(`${userPublicLocation.city}, ${userPublicLocation.country}`);
  }
  async function fetchCity(cityFetch: string) {
      const cityKey = await getCityKey(cityFetch);
      const mappedCity = mapCityLocation(cityKey);
      setLocation(mappedCity);
      setLocationKey(mappedCity.key);
      setLoading(false);
    }
    if(!cityFetch){
      setLoading(true);
      getUserPublicAddress();
    }
    if (cityFetch) {
      setLoading(true);
      fetchCity(cityFetch);
    }
  }, [cityFetch]);

  return { loading, location, locationKey, setCityFetch };
}
