import { describe, expect, test } from 'vitest'
import { UnparsedCityLocation, ParsedCityLocation } from "../../types/cityKey";
import mapCityLocation from "../mapCityLocation";

const apiDataMock: UnparsedCityLocation[] = [{
    Key: "L11150",
    Country: { EnglishName: "Argentina" },
    AdministrativeArea: { EnglishName: "Santa Fe" },
}];

const expectedOutput: ParsedCityLocation =  {
    key: "L11150", country: "Argentina", administrativeArea: "Santa Fe"
}
describe('mapCityLocation', () =>{
    test("Returns a ParsedCityLocation object when valid parameters are passed on", () => {
        expect(mapCityLocation(apiDataMock)).toEqual(expectedOutput);
    });
})