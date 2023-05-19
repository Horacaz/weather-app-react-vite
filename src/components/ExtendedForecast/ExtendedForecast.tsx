import { IParsedDailyForecast } from "../../types/Forecast"
import { Title } from "./styles"
export default function ExtendedForecast(props){
    /*
    date
    */
    const extendedForecast: IParsedDailyForecast[] = props; 
    return (
        <Title>Good Morning Sunshine!</Title>
    )
}