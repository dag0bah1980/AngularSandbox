import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  //For Form example
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
  });

  
  DS_SampleForm = new FormGroup({
    Code: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3),Validators.maxLength(32)]),
    Description: new FormControl('', [Validators.minLength(3),Validators.maxLength(512)]),
    IsActive: new FormControl(''),
    IsDeleted: new FormControl(''),
    Float: new FormControl('', [Validators.pattern('^\\d+\\.\\d{2}$')]), //two decimal places indicated by {2}
    Integer: new FormControl('', [Validators.pattern('^[0-9]*$')]),
    Date: new FormControl(''),
    Time: new FormControl(''),
    Memo: new FormControl(''),
    Lookup1: new FormControl(''),
    Lookup2: new FormControl(''),
    CreatedOn: new FormControl(''),
    ModifiedOn: new FormControl(''),
    CreatedBy: new FormControl(''),
    ModifiedBy: new FormControl(''),
  });

  onSubmitTest() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.DS_SampleForm.value);
  }

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute,) { 
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
