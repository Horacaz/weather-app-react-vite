export interface UnparsedCityLocation {
    Key: string;
    Country: {EnglishName: string};
    AdministrativeArea: {EnglishName: string};
}

export interface ParsedCityLocation {
    key: string;
    country: string;
    administrativeArea: string;
} 