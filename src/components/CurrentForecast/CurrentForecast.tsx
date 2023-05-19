import { IParsedCurrentForecast } from "../../types/Forecast";
import { Title, Container, Span } from "./styles";
export default function CurrentForecast(props: IParsedCurrentForecast) {
  return (
    <>
    <Title>Current Forecast</Title>
      <Container>
        <p>
          Weather Description: <Span>{props.weatherDescription}</Span>
        </p>
        <p>
          Current Temperature: <Span>{props.temperature}°c</Span>
        </p>
        <p>
          Humidity: <Span>{props.humidity}%</Span>
        </p>
        <p>
          Pressure: <Span>{props.pressure}mb</Span>
        </p>
        <p>
          Real Feel Temperature: <Span>{props.realTemperature}°c</Span>
        </p>
        <p>
          Weather Icon: <Span>{props.icon}</Span>
        </p>
        <p>
          Wind Direction: <Span>{props.wind.direction}°</Span>
        </p>
        <p>
          Wind Speed: <Span>{props.wind.speed}km/h</Span>
        </p>
      </Container>
    </>
  );
}
