export interface IUnparsedCityLocation {
  Key: string;
  Country: { EnglishName: string };
  AdministrativeArea: { EnglishName: string };
}

export interface IParsedCityLocation {
  key: string;
  country: string;
  administrativeArea: string;
}
