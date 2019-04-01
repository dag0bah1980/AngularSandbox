import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Priority, Severity, DS_Sample } from '../../models/DS_interfaces';

import SystemGlobalVars from '../../../../SystemGlobalVars.json'
import { retryWhen, flatMap, switchMap } from 'rxjs/operators';
import { interval, throwError, of, merge } from 'rxjs';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


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

  //DS_Sample End points
  getDS_Samples() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Samples');
    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Samples')
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    }))
  }

  getDS_Sample(id: number) {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Sample/'+id);
    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Sample/'+id)
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    }))    
  }

  ObsgetDS_Sample(id: number):Observable<DS_Sample> {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Sample/'+id);
    return this._http.get<{ds_sample: DS_Sample}>(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Sample/'+id)
    .map(res => res.ds_sample);

  }



  getDS_SamplesDropDown() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Samples');

    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/DS_Sample')
    .pipe(retryWhen(_ => {
      return interval(5000).pipe(
        flatMap(count => count == this.DATA_RETRY_COUNT ? throwError("Giving up") : of(count))
      )
    })) 
  }

}
