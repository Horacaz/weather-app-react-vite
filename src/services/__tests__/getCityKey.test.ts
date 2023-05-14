import { UnparsedCityLocation } from "../../types/cityKey";
import {describe, expect, test} from "vitest";
import getCityKey from "../getCityKey";

const expectedResultMock: UnparsedCityLocation[] = [{
    Key: "KEY",
    Country: {EnglishName: "Argentina"},
    AdministrativeArea: {EnglishName: "Santa Fe"},
}] 
   describe("getCityKey", () => {
    test("should have been called with a valid cityQuery", async () => {
        const cityQuery = "New York";
       expect(getCityKey(cityQuery)).toHaveBeenCalledWith(cityQuery);
    });
    test("Returns an object containing UnparsedCityLocation if requested cityQuery is valid", async () => {
        const cityQuery = "New York";
        const expectedResult: UnparsedCityLocation[] = await getCityKey(cityQuery);
        expect(expectedResult).toHaveProperty("Key");
        expect(expectedResult).toHaveProperty("Country");
        expect(expectedResult).toHaveProperty("AdministrativeArea");
        expect(expectedResultMock).toBe(expectedResultMock);
    });
   })
   