import { useState } from "react";
import { IParsedTwelveHoursForecast } from "../../types/Forecast";
import { Container, Divider, Title, Card, Text, ForecastImage, Icon, Button } from "./styles";

export default function TwelveHoursForecast(twelveHoursForecast: {
  twelveHoursForecast: IParsedTwelveHoursForecast[];
}) {
  const forecast = twelveHoursForecast.twelveHoursForecast;
  const [forecastIndex, setForecastIndex] = useState([0, 3]);

  function previousPage(forecastIndex: number[]){
    if(forecastIndex[0] === 0 && forecastIndex[1] === 3){
      return false;
    } else {
    setForecastIndex([forecastIndex[0] - 4, forecastIndex[1] - 4]);
    }
  }
  
  function nextPage(forecastIndex: number[]){
    if(forecastIndex[0] === 8 && forecastIndex[1] === 11){
      return false;
    } else {
      setForecastIndex([forecastIndex[0] + 4, forecastIndex[1] + 4]);
    }
  }

  return ( 
    <>
      <Container>
      <Title>Today's Forecast</Title>
        <Divider>
          {forecast.map((forecast, index) =>  {
            if (index >= forecastIndex[0] && index <= forecastIndex[1]) {
              return   <ForecastCard key={index} {...forecast} />
            } 
          }
          )}
        </Divider>
        <Divider>
          <Button onClick={() => previousPage(forecastIndex)}>Previous</Button>
          <Button onClick={() => nextPage(forecastIndex)}>Next</Button>
        </Divider>
      </Container>
    </>
  );
}

function ForecastCard(forecast: IParsedTwelveHoursForecast) {
  return (
    <>
      <Card>
        <Text>{forecast.date}</Text>
        <ForecastImage src={forecast.icon} />
        <Divider>
          <Icon src={forecast.temperatureIcon} />
          <Text>{forecast.temperature}°</Text>
          <Icon src={forecast.precipitationIcon} />
          <Text>{forecast.precipitation}%</Text>
        </Divider>
      </Card>
    </>
  );
}
