import { UnparsedCityLocation } from "../../types/cityKey";
import {describe, expect, test} from "vitest";
import getCityKey from "../getCityKey";

// this test is making a fetch to the API, overpass fetch implementation and use mock data instead.

const expectedResultMock: UnparsedCityLocation[] = [{
    Key: "KEY",
    Country: {EnglishName: "Argentina"},
    AdministrativeArea: {EnglishName: "Santa Fe"},
}] 
   describe("getCityKey", () => {
    test.skip("should have been called with a valid cityQuery", async () => {
        const cityQuery = "New York";
       expect(getCityKey(cityQuery)).toHaveBeenCalledWith(cityQuery);
    });
    test.skip("Returns an object containing UnparsedCityLocation if requested cityQuery is valid", async () => {
        const cityQuery = "New York";
        const expectedResult: UnparsedCityLocation[] = await getCityKey(cityQuery);
        expect(expectedResult).toHaveProperty("Key");
        expect(expectedResult).toHaveProperty("Country");
        expect(expectedResult).toHaveProperty("AdministrativeArea");
        expect(expectedResultMock).toBe(expectedResultMock);
    });
   })
   