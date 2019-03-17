import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../../../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http: HttpClient) { }

  getCarsSmall() {
    return this._http.get<any>('../../../../../assets/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }
}



