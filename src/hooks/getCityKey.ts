const API_KEY = 'GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X';
export default function getCityLocation(query: string): string{
    const ACCUWEATHER_URL  = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${query}`;
    fetch(ACCUWEATHER_URL).then(res => res.json()).then(data => data);
return 'Location';
}


