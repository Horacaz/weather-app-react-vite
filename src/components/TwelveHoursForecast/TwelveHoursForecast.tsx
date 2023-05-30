import { IParsedTwelveHoursForecast } from "../../types/Forecast"
import {Container, Card, Text, ForecastImage, Icon} from "./styles"
export default function TwelveHoursForecast(twelveHoursForecast : {twelveHoursForecast: IParsedTwelveHoursForecast[]}){
    const forecast = twelveHoursForecast.twelveHoursForecast;
    return( <Container>
         {forecast.map( (forecast, index) => ( <ForecastCard key={index}{...forecast}/>))}
    
    </Container>
     )
}


function ForecastCard(forecast: IParsedTwelveHoursForecast){
    return(<>
    <Card>
        <Text>{forecast.date}</Text>
        <ForecastImage src={forecast.icon} />
        <Icon src={forecast.temperatureIcon}/>
        <Text>{forecast.temperature}</Text>
        <Icon src={forecast.precipitationIcon}/>
        <Text>{forecast.precipitation}</Text>
      </Card>
    </>)
}