import { IParsedDailyForecast } from "../../types/Forecast";
import {
  Container,
  Title,
  Card,
  Text,
  Image,
  TemperatureContainer,
} from "./styles";
export default function ExtendedForecast({
  extendedForecast,
}: {
  extendedForecast: IParsedDailyForecast[];
}) {
  return (
    <>
      <Title>Extended Forecast</Title>
      <Container>
        {extendedForecast.map((forecast, i) => (
          <ForecastCard key={i} {...forecast} />
        ))}
      </Container>
    </>
  );
}

function ForecastCard(forecast: IParsedDailyForecast) {
  return (
    <>
      <Card>
        <Text>{forecast.date}</Text>
        <Image src={forecast.day.icon} />
        <Text>{forecast.day.iconDescription}</Text>
        <TemperatureContainer>
          <Image src={forecast.icon.temperature} />
          <Text>{forecast.temperature.min}°</Text>
          <Image src={forecast.icon.temperature} />
          <Text>{forecast.temperature.max}°</Text>
        </TemperatureContainer>
      </Card>
    </>
  );
}
