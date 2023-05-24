import { IParsedCurrentForecast } from "../../types/Forecast";
import { IParsedCityLocation } from "../../types/cityKey";
import {
  Title,
  Container,
  Image,
  Divider,
  Span,
  SmallDivider,
  Icon,
} from "./styles";
export default function CurrentForecast(props: {forecast: IParsedCurrentForecast, location: IParsedCityLocation}) {
  console.log(props.location)
  return (
    <>
      <Container>
        <Divider>
          <Title>{props.forecast.weatherDescription}</Title>
          <Image src={props.forecast.icon} />
          <Title>{props.forecast.temperature}°c</Title>
        </Divider>
        <Divider>
          <SmallDivider>
            <Title>{props.location.administrativeArea} {props.forecast.time}</Title>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.forecast.temperatureIcon} />
            <Span>Feels like: {props.forecast.realTemperature}°c</Span>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.forecast.precipitationIcon} />
            <Span>Humidity: {props.forecast.humidity}%</Span>
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
    </>
  );
}
