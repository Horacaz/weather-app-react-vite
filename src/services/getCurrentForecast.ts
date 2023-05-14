import {UnparsedCurrentForecast} from '../types/currentForecast';

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
export async function getCurrentForecast(locationKey: string): Promise<UnparsedCurrentForecast[]>{
const params = new URLSearchParams({apiKey: API_KEY, q: locationKey});
const url =  `https://dataservice.accuweather.com/currentconditions/v1/${params}&details=false`;
const result = await fetch(url).then(res => res.json()).then(data => data);
return result;
}

export async function getTwelveHoursForecast(){

}

export async function getOneDayForecast(){

}

export async function getFiveDaysForecast(){

}

