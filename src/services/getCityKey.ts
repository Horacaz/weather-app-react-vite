import {UnparsedCityLocation} from "../types/cityKey";
const API_KEY = 'GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X';

export default async function getCityKey(cityQuery: string): Promise<UnparsedCityLocation>{
    const params = new URLSearchParams({apikey: API_KEY, q: cityQuery});
    const URL = `https://dataservice.accuweather.com/locations/v1/cities/search?${params}`; 
    return fetch(URL).then(res => res.json()).then(data => data);
}


