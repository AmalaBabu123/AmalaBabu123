import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CountryService } from '../country.service';
import * as _ from "underscore";
import { countryDataModel } from '../models/country-data.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

  @Input() searchInputValue: any;

  public listByName: any[] = [];
  public resultList: countryDataModel[] = [];
  public totalList: countryDataModel[] = [];
  public listByFullName: any[] = [];
  public listByCode: any[] = [];
  public listByCurrency: any[] = [];
  public listByLanguage: any[] = [];
  public listByCapital: any[] = [];
  public listByCallingCodes: any[] = [];
  public listByCallingRegion: any[] = [];
  public isNoData = false;
  public isLoading = false;
  public isSearchValue = false;

  constructor(private api: CountryService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchInputValue && changes.searchInputValue.currentValue != undefined) {
      if (this.searchInputValue != '') {
        this.isLoading = true;
        this.isSearchValue = true;
        this.searchInputValue = this.searchInputValue;

        if (Number(this.searchInputValue)) {
          this.getCountryByCallingCode();
        } else {
          this.getCountryByName();
        }
      } else {
        this.isSearchValue = false;
      }
    }
  }

  getCountryByName() {
    this.api.getCountryByName(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByName = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByName = [];
          this.doSearch();
          this.getCountryByRegion();
        }
      })
  }

  getCountryByRegion() {
    this.api.getCountryByRegion(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByCallingRegion = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByCallingRegion = [];
          this.doSearch();
          // checking other apis
          this.getCountryByFullName();
          this.getCountryByCode();
          this.getCountryByCurrency();
          this.getCountryByLanguage();
          this.getCountryByCapitalCity();
        }
      })
  }

  getCountryByFullName() {
    this.api.getCountryByFullName(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByFullName = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByFullName = [];
          this.doSearch();
        }
      })
  }

  getCountryByCode() {
    this.api.getCountryByCode(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByCode = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByCode = [];
          this.doSearch();
        }
      })
  }

  getCountryByCurrency() {
    this.api.getCountryByCurrency(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByCurrency = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByCurrency = [];
          this.doSearch();
        }
      })
  }

  getCountryByLanguage() {
    this.api.getCountryByLanguage(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByLanguage = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByLanguage = [];
          this.doSearch();
        }
      })
  }

  getCountryByCapitalCity() {
    this.api.getCountryByCapitalCity(this.searchInputValue).then((res) => {
      if (res.data.length > 0) {
        this.listByCapital = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByCapital = [];
          this.doSearch();
        }
      })
  }

  getCountryByCallingCode() {
    this.api.getCountryByCallingCode(Number(this.searchInputValue)).then((res) => {
      if (res.data.length > 0) {
        this.listByCallingCodes = res.data;
        this.doSearch();
      }
    })
      .catch((err) => {
        if (err.response.data.status == 404 && err.response.data.message == "Not Found") {
          this.listByCallingCodes = [];
          this.doSearch();
        }
      })
  }

  doSearch() {
    this.isLoading = false;
    this.concatLists();
    this.resultList = [];
    this.isNoData = false;
    if (this.totalList.length > 0) {
      this.isNoData = false;
      this.totalList.map
      this.resultList = this.totalList;
    } else {
      this.isNoData = true;
      this.resultList = [];
    }
  }

  concatLists() {
    let list = [];
    if (this.listByName.length > 0) {
      list = this.listByName;
    }
    if (this.listByCallingRegion.length > 0) {
      list = list.concat(this.listByCallingRegion);
    }
    if (this.listByFullName.length > 0) {
      list = list.concat(this.listByFullName);
    }
    if (this.listByCode.length > 0) {
      list = list.concat(this.listByCode);
    }
    if (this.listByCurrency.length > 0) {
      list = list.concat(this.listByCurrency);
    }
    if (this.listByLanguage.length > 0) {
      list = list.concat(this.listByLanguage);
    }
    if (this.listByCapital.length > 0) {
      list = list.concat(this.listByCapital);
    }
    if (this.listByCallingCodes.length > 0) {
      list = list.concat(this.listByCallingCodes);
    }
    this.removeDuplicates(list);
  }

  removeDuplicates(originalArray: any) {
    let filterArray = _.uniq(originalArray, false, _.property('numericCode'));
    filterArray.map((item) => {
      item = new countryDataModel(item);
    })
    this.totalList = filterArray;
  }

}
