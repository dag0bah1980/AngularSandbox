import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Priority, Severity } from '../../models/DS_interfaces';

import SystemGlobalVars from '../../../../SystemGlobalVars.json'
import { retryWhen, flatMap, switchMap } from 'rxjs/operators';
import { interval, throwError, of, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetupService {


  public data;
  Priority : Priority[];

  DATA_API_ENDPOINT: string;
  DATA_RETRY_COUNT: number;

  constructor(private _http: HttpClient,) { 
    this.DATA_API_ENDPOINT = SystemGlobalVars[0].BaseDataAPIURL;
    this.DATA_RETRY_COUNT = SystemGlobalVars[0].DataAPIRetrycount;
  }

  //Priorities End points
  getPriorities() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/Priorities');
    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/Priorities')
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    }))
  }


  getPrioritiesDropDown() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/Priorities');

    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/PrioritiesDropDown')
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    })) 
  }

  //Severities End points
  getSeverities() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/Severities');
    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/Severities')
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    }))
  }


  getSeveritiesDropDown() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/Severities');
    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/SeveritiesDropDown')
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    }))
  }


}
