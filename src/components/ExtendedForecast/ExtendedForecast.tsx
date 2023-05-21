import { IParsedDailyForecast } from "../../types/Forecast";
import { Container, Title, Card, Span, Image } from "./styles";
export default function ExtendedForecast({
  extendedForecast,
}: {
  extendedForecast: IParsedDailyForecast[];
}) {
  return (
    <>
      <Title>Extended Forecast</Title>
      <Container>
        {extendedForecast.map((forecast) => (
          <ForecastCard {...forecast} />
        ))}
      </Container>
    </>
  );
}

function ForecastCard(forecast: IParsedDailyForecast) {
  return (
    <>
      <Card>
        <p>
          Date: <Span>{forecast.date}</Span>
        </p>
        <Image src={forecast.day.icon} />
        <p>
          Icon Description: <Span>{forecast.day.iconDescription}</Span>
        </p>
        <p>
          Min Temperature: <Span>{forecast.temperature.min}</Span>
        </p>
        <p>
          Max Temperature: <Span>{forecast.temperature.max}</Span>
        </p>
      </Card>
    </>
  );
}
