import { useState } from "react";
import "./App.css";
import useCityLocation from "./hooks/useCityLocation";
import useForecast from "./hooks/useForecast";
import SearchLocation from "./components/SearchLocation/SearchLocation";
function App() {
  const { loading, cityLocation, cityKey, setCityFetch } = useCityLocation();
  const {currentForecast, setKey} = useForecast();
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Weather in your Location</h1>
      <SearchLocation />
      <label>
        City Location Search
        {/* add validation beforehand */}
        <input onChange={(event) => setQuery(event.target.value)} type="text" />
      </label>
      <button
        onClick={() => {
          setCityFetch(query);
        }}
        type="button"
      >
        Fetch City
      </button>
      {!loading && (
        <>
          <h2>{cityLocation.administrativeArea}</h2>
          <button
            onClick={() => {
              setKey(cityKey);
            }}
          >
            Get Forecast
          </button>
        </>
      )}
    </>
  );
}

export default App;
