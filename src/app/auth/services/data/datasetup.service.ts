import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Priority, Severity } from '../../models/DS_interfaces';

import SystemGlobalVars from '../../../../SystemGlobalVars.json'

@Injectable({
  providedIn: 'root'
})
export class DatasetupService {


  public data;
  Priority : Priority[];

  DATA_API_ENDPOINT: string;

  constructor(private _http: HttpClient,) { 
    this.DATA_API_ENDPOINT = SystemGlobalVars[0].BaseDataAPIURL;
  }

  getPriorities() {
    console.log(this.DATA_API_ENDPOINT+'/api/DataSetup/Priorities');
    return this._http.get(this.DATA_API_ENDPOINT+'/api/DataSetup/Priorities')
  }
}
