import { useState, useEffect } from "react";
import "./App.css";
import useCityLocation from "./hooks/useCityLocation";
import useForecast from "./hooks/useForecast";
import SearchLocation from "./components/SearchLocation/SearchLocation";
import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
function App() {
  const { locationKey, setCityFetch } = useCityLocation();
  const { currentForecast, setKey } = useForecast();
  const [query, setQuery] = useState("");

  const onChangeCallBack = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const onClickCallBack = () => setCityFetch(query);

  // fetches Forecast
  useEffect(() => {
    if (locationKey) {
      setKey(locationKey);
    }
  }),
    [setKey, locationKey];

  return (
    <>
      <h1>Weather in your Location</h1>
      <SearchLocation onChange={onChangeCallBack} onClick={onClickCallBack} />
      {currentForecast && <CurrentForecast {...currentForecast} />}
    </>
  );
}

export default App;
