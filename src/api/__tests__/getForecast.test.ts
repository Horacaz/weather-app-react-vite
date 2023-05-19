import { describe, test, expect, vi, beforeEach } from "vitest";
import {
  getCurrentForecast,
  getFiveDaysForecast,
  getTwelveHoursForecast,
} from "../getForecast";
beforeEach(() => {
  vi.clearAllMocks();
});

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));

const locationKey = "Foo";
describe("getCurrentForecast", () => {
  test("getCurrentForecast succesfully sends request to API", () => {
    const expectedUrl =
      "https://dataservice.accuweather.com/currentconditions/v1/Foo?apikey=GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X&details=true";
    getCurrentForecast(locationKey);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

describe("getFiveDaysForecast", () => {
  test("getFiveDaysForecast succesfully sends request to API", () => {
    const expectedUrl =
      "https://dataservice.accuweather.com/forecasts/v1/daily/5day/Foo?apikey=GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X&details=true&metric=true";
    getFiveDaysForecast(locationKey);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

describe("getTwelveHoursForecast", () => {
  test("getTwelveHoursForecast succesfully sends request to API", () => {
    const expectedUrl =
      "https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/Foo?apikey=GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X&details=true&metric=true";
    getTwelveHoursForecast(locationKey);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});
