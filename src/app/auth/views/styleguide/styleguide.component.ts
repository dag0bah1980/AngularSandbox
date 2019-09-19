import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { SelectItem } from 'primeng/api';
import moment from 'moment';


//For Table demo
import { Car } from '../../models/car';
import { CarService } from '../../services/data/sample/car.service';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'angsand-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.css']
})
export class StyleguideComponent implements OnInit {

  currDate;
  currentDateTime;

  cities: City[];
  selectedCity: City;

  cars: Car[];
  cols: any[];

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, private _carService: CarService) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    
    this.currDate = moment().format();
    
   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this._carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
  }
}
