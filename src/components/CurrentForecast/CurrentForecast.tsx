import { IParsedCurrentForecast } from "../../types/Forecast";
import { IParsedCityLocation } from "../../types/cityKey";
import {
  Title,
  Container,
  Image,
  Forecast,
  Divider,
  SmallDivider,
  Span,
  Icon,
} from "./styles";
export default function CurrentForecast(props: {
  forecast: IParsedCurrentForecast;
  location: IParsedCityLocation;
}) {
  return (
      <Container>
        <Forecast>
          <SmallDivider>
            <Title>{props.location.administrativeArea}</Title>
            <Image src={props.forecast.icon} />
            <Title>{props.forecast.weatherDescription}</Title>
          </SmallDivider>
          <SmallDivider>
            <h1>{props.forecast.temperature}°C</h1>
          </SmallDivider>
        </Forecast>
      
        <Divider>
          <SmallDivider>
            <Title>{props.forecast.time}</Title>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.forecast.temperatureIcon} />
            <Span>Feels like: {props.forecast.realTemperature}°C</Span>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.forecast.pressureIcon} />
            <Span>Pressure: {props.forecast.pressure}mb</Span>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.forecast.windIcon} />
            <Span>
              {props.forecast.wind.direction} {props.forecast.wind.speed}km/h
            </Span>
          </SmallDivider>
        </Divider>
      </Container>
  );
}
