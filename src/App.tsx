import { useState } from 'react';
import './App.css'
import useCityLocation from './hooks/useCityLocation';
function App() {  
  const {loading, cityLocation, setCityFetch} = useCityLocation();
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Hello World</h1>
      <label>
      City Location Search
      <input onChange = {(event) => setQuery(event.target.value)}type='text'/>
      </label>
      <button onClick={() => {
      setCityFetch(query)
      }}type="button">Fetch City</button>
      {!loading && <>
        <p>{cityLocation.key}</p>
        <p>{cityLocation.country}</p>
        <p>{cityLocation.administrativeArea}</p>
        </>
        }
    </>
  )
}

export default App
