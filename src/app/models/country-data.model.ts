export class countryDataModel {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: Array<any>;
    area: number;
    borders: Array<any>;
    callingCodes: Array<any>;
    capital: string;
    cioc: string;
    currencies: Array<object>;
    demonym: string;
    flag: string;
    gini;
    languages: Array<object>;
    latlng: Array<any>;
    name: string;
    nativeName: string;
    numericCode: string;
    population: number;
    region: string;
    regionalBlocs: Array<any>;
    subregion: string;
    timezones: Array<any>;
    topLevelDomain: Array<any>;
    translations;

    constructor(data: any) {
        this.alpha2Code = data.alpha2Code;
        this.alpha3Code = data.alpha3Code;
        this.altSpellings = data.altSpellings;
        this.area = data.area;
        this.borders = data.borders;
        this.callingCodes = data.callingCodes;
        this.capital = data.capital;
        this.cioc = data.cioc;
        this.currencies = data.currencies;
        this.demonym = data.demonym;
        this.flag = data.flag;
        this.gini = data.gini;
        this.languages = data.languages;
        this.latlng = data.latlng;
        this.name = data.name;
        this.nativeName = data.nativeName;
        this.numericCode = data.numericCode;
        this.population = data.population;
        this.region = data.region;
        this.regionalBlocs = data.regionalBlocs;
        this.subregion = data.subregion;
        this.timezones = data.timezones;
        this.topLevelDomain = data.topLevelDomain;
        this.translations = data.translations;
    }
}