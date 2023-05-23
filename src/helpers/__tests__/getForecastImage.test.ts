import { describe, expect, test } from "vitest";
import getForecastImages from "../getForecastImage";
import DayOne from '../../assets/1.svg'
import magnifier from '../../assets/magnifier.svg'

const forecastImages = {
    1: DayOne,
    magnifier: magnifier,
};
describe("getForecastImages", () => {
    test("return image based on numeric parameter", () => {
        const forecastImage = getForecastImages(1);
        expect(forecastImage).toEqual(forecastImages[1]);
    });
    test("return image based on string parameter", () => {
        const forecastImage = getForecastImages("magnifier");
        expect(forecastImage).toEqual(forecastImages.magnifier);
    });
})