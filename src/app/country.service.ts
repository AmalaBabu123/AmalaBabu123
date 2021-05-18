import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public apiEndPoint = environment.apiEndPoint;

  constructor() { }

  getCountryByName(name: any) {
    return axios.get(this.apiEndPoint + 'name/' + name,
      {
        responseType: 'json'
      });
  }

  getCountryByFullName(name: any) {
    return axios.get(this.apiEndPoint + 'name/' + name + '?fullText=true',
      {
        responseType: 'json'
      });

  }
  getCountryByCode(code: any) {
    return axios.get(this.apiEndPoint + 'alpha/' + code,
      {
        responseType: 'json'
      });
  }

  getCountryByCurrency(currency: any) {
    return axios.get(this.apiEndPoint + 'currency/' + currency,
      {
        responseType: 'json'
      });
  }

  getCountryByLanguage(language: any) {
    return axios.get(this.apiEndPoint + 'lang/' + language,
      {
        responseType: 'json'
      });
  }

  getCountryByCapitalCity(capital: any) {
    return axios.get(this.apiEndPoint + 'capital/' + capital,
      {
        responseType: 'json'
      });
  }

  getCountryByCallingCode(capital: any) {
    return axios.get(this.apiEndPoint + 'callingcode/' + capital,
      {
        responseType: 'json'
      });
  }

  getCountryByRegion(region: any) {
    return axios.get(this.apiEndPoint + 'region/' + region,
      {
        responseType: 'json'
      });
  }
}
