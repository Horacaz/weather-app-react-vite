import { Container, Span} from "./styles";
export default function CurrentForecast(props){
    const {title, CurrentForecast} = props;

return(
    <Container>
         <h2>{title}</h2>
         <p>Weather Description: <Span>{CurrentForecast.weatherDescription}</Span></p>
         <p>Current Temperature: <Span>{CurrentForecast.temperature}</Span></p>
         <p>Time of medition: <Span>{CurrentForecast.time}</Span></p>
    </Container>
)
}