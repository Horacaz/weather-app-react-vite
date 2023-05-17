import {
  IParsedCurrentForecast,
  IUnparsedCurrentForecast,
  IUnparsedDailyForecast,
  IParsedDailyForecast,
  IParsedTwelveHoursForecast,
  IUnparsedTwelveHoursForecast,
} from "../../types/Forecast";

import { describe, test } from "vitest";
import {
  getCurrentForecast,
  getFiveDaysForecast,
  getOneDayForecast,
  getTwelveHoursForecast,
} from "../getForecast";

const locationKey = "1LLLA";
describe("getCurrentForecast", () => {
  test("validQuery", () => {
    getCurrentForecast(locationKey);
  });
});

describe("getFiveDaysForecast", () => {
  test("validQuery", () => {
    getFiveDaysForecast(locationKey);
  });
});

describe("getOneDayForecast", () => {
  test("validQuery", () => {
    getOneDayForecast(locationKey);
  });
});

describe("getTwelveHoursForecast", () => {
  test("validQuery", () => {
    getTwelveHoursForecast(locationKey);
  });
});
