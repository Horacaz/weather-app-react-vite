import { IParsedCurrentForecast } from "../../types/Forecast";
import {
  Title,
  Container,
  Image,
  Divider,
  Span,
  SmallDivider,
  Icon,
} from "./styles";
export default function CurrentForecast(props: IParsedCurrentForecast) {
  return (
    <>
      <Title>Current Forecast</Title>
      <Container>
        <Divider>
          <Title>{props.weatherDescription}</Title>
          <Image src={props.icon} />
          <Title>{props.temperature}°c</Title>
        </Divider>
        <Divider>
          <SmallDivider>
            <Title>{props.time}</Title>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.temperatureIcon} />
            <Span>Feels like: {props.realTemperature}°c</Span>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.precipitationIcon} />
            <Span>Humidity: {props.humidity}%</Span>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.pressureIcon} />
            <Span>Pressure: {props.pressure}mb</Span>
          </SmallDivider>
          <SmallDivider>
            <Icon src={props.windIcon} />
            <Span>
              {props.wind.direction} {props.wind.speed}km/h
            </Span>
          </SmallDivider>
        </Divider>
      </Container>
    </>
  );
}
