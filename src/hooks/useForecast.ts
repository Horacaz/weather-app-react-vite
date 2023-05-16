// this is going to call api and mappers,
import {useState, useEffect} from 'react';
import { IParsedCurrentForecast, IParsedDailyForecast, IParsedExtendedForecast, IParsedTwelveHoursForecast } from "../types/Forecast";
import mapCurrentForecast from "../mappers/mapCurrentForecast";
import mapExtendedForecast from "../mappers/mapExtendedForecast";
import mapDailyForecast from "../mappers/mapOneDayForecast";
import mapTwelveHoursForecast from "../mappers/mapTwelveHoursForecast";
import { getCurrentForecast, getFiveDaysForecast,getOneDayForecast,getTwelveHoursForecast } from "../services/getForecast";

export default function useForecast(){
    const [locationKey, setKey] = useState<string | null>(null);
    const [currentForecast, setCurrentForecast] = useState<IParsedCurrentForecast | null> (null);
    const [extendedForecast, setExtendedForecast] = useState<IParsedExtendedForecast | null> (null);
    const [dailyForecast, setDailyForecast] = useState <IParsedDailyForecast | null> (null);
    const [twelveHoursForecast, setTwelveHoursForecast] = useState<IParsedTwelveHoursForecast[] | null> (null);
    useEffect(() => {
        async function getForecast(locationKey: string){
            Promise.all([getCurrentForecast(locationKey), 
                getFiveDaysForecast(locationKey),
                getOneDayForecast(locationKey), 
                getTwelveHoursForecast(locationKey)]).then(values => {
                    setCurrentForecast(mapCurrentForecast(values[0]))
                    setExtendedForecast(mapExtendedForecast(values[1]))
                    setDailyForecast(mapDailyForecast(values[2]))
                    setTwelveHoursForecast(mapTwelveHoursForecast(values[3]))
                })
        }
        if(locationKey){
            getForecast(locationKey);
        }
    }, [locationKey])
    return {currentForecast,extendedForecast, dailyForecast, twelveHoursForecast, setKey};
}
