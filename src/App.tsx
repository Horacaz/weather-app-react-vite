import { useState, useEffect } from "react";
import "./App.css";
import useCityLocation from "./hooks/useCityLocation";
import useForecast from "./hooks/useForecast";
import SearchLocation from "./components/SearchLocation/SearchLocation";
import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
import ExtendedForecast from "./components/ExtendedForecast/ExtendedForecast";
import TwelveHoursForecast from "./components/TwelveHoursForecast/TwelveHoursForecast";
function App() {
  const { location, locationKey, setCityFetch } = useCityLocation();
  const { currentForecast, twelveHoursForecast, extendedForecast, setKey } = useForecast();
  const [query, setQuery] = useState("");

  const onChangeCallBack = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const onClickCallBack = () => setCityFetch(query);

  useEffect(() => {
    if (locationKey) {
      setKey(locationKey);
    }
  }),
    [setKey, locationKey];

  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchLocation onChange={onChangeCallBack} onClick={onClickCallBack} />
      {currentForecast && location && (
        <CurrentForecast forecast={currentForecast} location={location} />
      )}
      {twelveHoursForecast && (<TwelveHoursForecast twelveHoursForecast={twelveHoursForecast}/>)}
      {extendedForecast && (
        <ExtendedForecast extendedForecast={extendedForecast} />
      )}
    </>
  );
}

export default App;
