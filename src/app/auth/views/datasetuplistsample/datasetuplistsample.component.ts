import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

//For Table demo
import { Car } from '../../models/car';
import { CarService } from '../../services/data/sample/car.service';

@Component({
  selector: 'angsand-datasetuplistsample',
  templateUrl: './datasetuplistsample.component.html',
  styleUrls: ['./datasetuplistsample.component.css']
})
export class DatasetuplistsampleComponent implements OnInit {

  cars: Car[];
  cols: any[];
  selectedColumns: any[];

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, private _carService: CarService) {
    this._viewMethodsService.updateTitle(this._activatedRoute);   
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
    
    this.selectedColumns = this.cols;
  }

}
