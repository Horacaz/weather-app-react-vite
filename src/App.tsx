import { useState } from 'react';
import './App.css'
import useCityLocation from './hooks/useCityLocation';
import useForecast from './hooks/useForecast';
function App() {  
  const {loading, cityLocation, cityKey, setCityFetch} = useCityLocation();
  const {currentForecast,extendedForecast, dailyForecast, twelveHoursForecast, setKey} = useForecast();
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Hello World</h1>
      <label>City Location Search
        {/* add validation beforehand */}
        <input onChange = {(event) => setQuery(event.target.value)}type='text'/>
      </label>
      <button onClick={() => {setCityFetch(query)}}type="button">Fetch City</button>
  {!loading && <>
  <h2>{cityLocation.administrativeArea}</h2>
  <button onClick={() => {setKey(cityKey)}}>Get Forecast</button>
  <button onClick={() => {console.log(currentForecast,extendedForecast, dailyForecast, twelveHoursForecast)}}>Log Forecasts</button>
  </>
  }
  </>
  )
}

export default App
