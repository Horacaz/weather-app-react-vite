import Day1 from "../assets/1.svg";
import Day2 from "../assets/2.svg";
import Day3 from "../assets/3.svg";
import Day4 from "../assets/4.svg";
import Day5 from "../assets/5.svg";
import Day6 from "../assets/6.svg";
import Day7 from "../assets/7.svg";
import Day8 from "../assets/8.svg";
import Day9 from "../assets/9.svg";
import Day10 from "../assets/10.svg";
import Day11 from "../assets/11.svg";
import Day12 from "../assets/12.svg";
import Day13 from "../assets/13.svg";
import Day14 from "../assets/14.svg";
import Day15 from "../assets/15.svg";
import Day16 from "../assets/16.svg";
import Day17 from "../assets/17.svg";
import Day18 from "../assets/18.svg";
import Day19 from "../assets/19.svg";
import Day20 from "../assets/20.svg";
import Day21 from "../assets/21.svg";
import Day22 from "../assets/22.svg";
import Day23 from "../assets/23.svg";
import Day24 from "../assets/24.svg";
import Day25 from "../assets/25.svg";
import Day26 from "../assets/26.svg";
import Day29 from "../assets/29.svg";
import Day30 from "../assets/30.svg";
import Day31 from "../assets/31.svg";
import Day32 from "../assets/32.svg";
import Night33 from "../assets/33.svg";
import Night34 from "../assets/34.svg";
import Night35 from "../assets/35.svg";
import Night36 from "../assets/36.svg";
import Night37 from "../assets/37.svg";
import Night38 from "../assets/38.svg";
import Night39 from "../assets/39.svg";
import Night40 from "../assets/40.svg";
import Night41 from "../assets/41.svg";
import Night42 from "../assets/42.svg";
import Night43 from "../assets/43.svg";
import Night44 from "../assets/44.svg";
import magnifier from "../assets/magnifier.svg";
import precipitation from "../assets/precipitation.svg";
import temperature from "../assets/temperature.svg";
import wind from "../assets/wind.svg";
import pressure from "../assets/pressure.svg";

interface forecastImages {
  [key: string]: string;
}
const forecastImages: forecastImages = {
  1: Day1,
  2: Day2,
  3: Day3,
  4: Day4,
  5: Day5,
  6: Day6,
  7: Day7,
  8: Day8,
  9: Day9,
  10: Day10,
  11: Day11,
  12: Day12,
  13: Day13,
  14: Day14,
  15: Day15,
  16: Day16,
  17: Day17,
  18: Day18,
  19: Day19,
  20: Day20,
  21: Day21,
  22: Day22,
  23: Day23,
  24: Day24,
  25: Day25,
  26: Day26,
  29: Day29,
  30: Day30,
  31: Day31,
  32: Day32,
  33: Night33,
  34: Night34,
  35: Night35,
  36: Night36,
  37: Night37,
  38: Night38,
  39: Night39,
  40: Night40,
  41: Night41,
  42: Night42,
  43: Night43,
  44: Night44,
  magnifier: magnifier,
  precipitation: precipitation,
  temperature: temperature,
  wind: wind,
  pressure: pressure,
};
export default function getForecastImages(code: string | number): string {
  const image = forecastImages[code];
  return image;
}
