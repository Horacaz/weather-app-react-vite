import { useState } from 'react';
import './App.css'
import useCityLocation from './hooks/useCityLocation';
function App() {  
  const {loading, cityLocation, setCityFetch} = useCityLocation();
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Hello World</h1>
      <label>City Location Search
        {/* add validation beforehand */}
        <input onChange = {(event) => setQuery(event.target.value)}type='text'/>
      </label>
      <button onClick={() => {setCityFetch(query)}}type="button">Fetch City</button>
  {!loading && 
  <h2>{cityLocation.administrativeArea}</h2>
  }
    </>
  )
}

export default App
