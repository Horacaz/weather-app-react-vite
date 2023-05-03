import { ParsedCityLocation} from "../types/cityKey";
import getCityKey from "../services/getCityKey";
import mapCityLocation from "../mappers/mapCityLocation";
import { useEffect, useState } from "react";
export default function useCityLocation(){
    const [loading, setLoading] = useState(false);
    const [cityLocation, setCityLocation] = useState<ParsedCityLocation>({key: "",country: "", administrativeArea: ""});
    const [cityFetch, setCityFetch] = useState("");

    useEffect( () =>{
        async function fetchCity() {
            setCityLocation(mapCityLocation(await getCityKey(cityFetch)));
            setLoading(false);
        }
        if(cityFetch){
            setLoading(true);
            fetchCity();
        }
    }, [cityFetch])
    
return {loading, cityLocation, setCityFetch}
}


