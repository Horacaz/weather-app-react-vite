import { IParsedDailyForecast } from "../../types/Forecast";
import {
  Container,
  Card,
  Text,
  Image,
  TemperatureContainer,
  MaxTemperature,
  MinTemperature,
} from "./styles";
export default function ExtendedForecast({
  extendedForecast,
}: {
  extendedForecast: IParsedDailyForecast[];
}) {
  return (
    <>
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
          <MinTemperature src={forecast.icon.temperature} />
          <Text>{forecast.temperature.min}°</Text>
          <MaxTemperature src={forecast.icon.temperature} />
          <Text>{forecast.temperature.max}°</Text>
        </TemperatureContainer>
      </Card>
    </>
  );
}
