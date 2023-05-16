import { describe, expect, test } from 'vitest'
import { IParsedCurrentForecast } from "../../types/Forecast";
import currentConditionsMock from '../../../fixtures/currentConditions.json';
import mapCurrentForecast from "../mapCurrentForecast";

const currentConditionsFixture = currentConditionsMock;
const expectedOutput: IParsedCurrentForecast =  {
    temperature: 20.9,
    time: '2023-05-16T11:20:00-03:00',
    weatherDescription: 'Sunny',
}
describe('mapCurrentForecast', () =>{
    test("Returns a ParsedCurrentForecast object when valid parameters are passed on", () => {
        expect(mapCurrentForecast(currentConditionsFixture)).toEqual(expectedOutput);
    });
})