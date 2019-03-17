import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { SelectItem } from 'primeng/api';

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

  cities: City[];
  selectedCity: City;

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }
}
