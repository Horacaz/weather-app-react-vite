import { describe, test, expect, vi } from "vitest";
import getCityKey from "../getCityKey";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));
describe("getCityKey", () => {
  const expectedUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=GCs4Stk98mbGy2ESMGZ5naQMcAcABC3X&q=Foo";
  test("getCityKey Succesfully sends request to API", () => {
    getCityKey("Foo");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});
