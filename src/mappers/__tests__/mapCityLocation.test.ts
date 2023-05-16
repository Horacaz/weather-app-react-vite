import { describe, expect, test } from 'vitest'
import { IUnparsedCityLocation, IParsedCityLocation } from "../../types/cityKey";
import mapCityLocation from "../mapCityLocation";

const apiDataMock: IUnparsedCityLocation[] = [{
    Key: "L11150",
    Country: { EnglishName: "Argentina" },
    AdministrativeArea: { EnglishName: "Santa Fe" },
}];

const expectedOutput: IParsedCityLocation =  {
    key: "L11150", country: "Argentina", administrativeArea: "Santa Fe"
}
describe('mapCityLocation', () =>{
    test("Returns a ParsedCityLocation object when valid parameters are passed on", () => {
        expect(mapCityLocation(apiDataMock)).toEqual(expectedOutput);
    });
})