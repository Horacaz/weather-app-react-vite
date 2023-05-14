import {IUnparsedCurrentForecast} from '../types/Forecast';

/* 

All of these are going to use the same Key and Query;
So Yeah, reuse this code, it'll be only one hook, get Forecast.
Promise.all, perhaps?
Every one of these fetchs should be mapped adn then passed onto its proper component,
because every part of the UI will be rendered by a diffrente component but, does
that mean that I need to FETCH en every component?
Or can I get everything at the same time and then pass on the parameters,
yeah I could do something like:

forecast = {12Hours, OneDay, FiveDay}


12HoursComponent(props){

}

<12HoursComponent forecast= forecast.12hours />

The Components will render with all its DATA ALREADY PASSED ONTO;
WHY WOULD I FORCE RE-RENDERS AND FETCH WHEN I
CAN MAKE THEM ALL INSIDE OF INITIAL APP COMPONENT,
WHERE THE INPUT IS LCOATE? HUH?
*/


const API_KEY = 'GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X';
const locationKey = "1-11221_1_AL";
async function getCurrentForecast(locationKey: string): Promise<IUnparsedCurrentForecast[]>{
    const url =  `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=false`;
    const result = await fetch(url).then(res => res.json()).then(data => data);
    return result;
}
async function getTwelveHoursForecast(locationKey: string){
    const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}&details=false&metric=true`
    const result = await fetch(url).then(res => res.json()).then(data => data);
    return result;
}

async function getOneDayForecast(locationKey: string){
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${API_KEY}&details=false&metric=true`
    const result = await fetch(url).then(res => res.json()).then(data => data);
    return result;
}

async function getFiveDaysForecast(locationKey: string){
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=false&metric=true`
    const result = await fetch(url).then(res => res.json()).then(data => data);
    return result;
}
export const promesas = Promise.all(
    [getCurrentForecast(locationKey), 
        getTwelveHoursForecast(locationKey), 
        getOneDayForecast(locationKey), 
        getFiveDaysForecast(locationKey)]).
        then((values) => console.log(values));

        //I got an idea, use all these functions individually, then map those values INDIVIDUALLY. Create 
        // custom hook called useForecast and use a promise somehow to retrieve all these values ready to be rendered;
        // maybe we should not use Promise.all;