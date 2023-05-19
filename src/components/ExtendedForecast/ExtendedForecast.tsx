import { IParsedDailyForecast } from "../../types/Forecast"
import { Title, Container, Span } from "./styles"
export default function ExtendedForecast({extendedForecast} : {extendedForecast: IParsedDailyForecast[]}){
    return (
        <>
        <Title>Extended Forecast</Title>
        {extendedForecast.map( forecast => <ForecastCard {...forecast}/>)}
        </>
    )
}


function ForecastCard(forecast: IParsedDailyForecast){
return (
    <>
    <Container>
        <p>Date: <Span>{forecast.date}</Span></p>
        <p>Icon Number: <Span>{forecast.day.icon}</Span></p>
        <p>Icon Description: <Span>{forecast.day.iconDescription}</Span></p>
        <p>Min Temperature: <Span>{forecast.temperature.min}</Span></p>
        <p>Max Temperature: <Span>{forecast.temperature.max}</Span></p>
    </Container>
    </>
)
}