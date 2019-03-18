import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

//For Dropdown example
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'angsand-datasetupsample',
  templateUrl: './datasetupsample.component.html',
  styleUrls: ['./datasetupsample.component.css']
})
export class DatasetupsampleComponent implements OnInit {

  //For Dropdown example
  cities: City[];
  selectedCity: City;

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, ) { 
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

  disabled: boolean = true;
  display;

  //Checkbox example
  selectedCities: string[] = [];
  selectedCategories: string[] = ['Technology', 'Sports'];
  checked: boolean = false;

  //Editor example
  text: string;

  toggleDisabled() {
      this.disabled = !this.disabled;
  }

  handleClick() {
    //execute action
  }
}
