import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    IsDeleted: new FormControl({value:'',disabled: true}),
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

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  CodeCtrl: FormControl;
  DescriptionCtrl: FormControl;
  IsActiveCtrl: FormControl;
  IsDeletedCtrl: FormControl;
  FloatCtrl: FormControl;
  IntegerCtrl: FormControl;
  DateCtrl: FormControl;
  TimeCtrl: FormControl;
  MemoCtrl: FormControl;
  Lookup1Ctrl: FormControl;
  Lookup2Ctrl: FormControl;
  CreatedOnCtrl: FormControl;
  ModifiedOnCtrl: FormControl;
  CreatedByCtrl: FormControl;
  ModifiedByCtrl: FormControl;

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    
    this.CodeCtrl = this._formBuilder.control({value:'Code', disabled: true}, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3),Validators.maxLength(32)]);
    this.DescriptionCtrl = this._formBuilder.control('Description', [Validators.minLength(3),Validators.maxLength(512)]);
    this.IsActiveCtrl = this._formBuilder.control('IsActive');
    this.IsDeletedCtrl = this._formBuilder.control({value:'IsDeleted', disabled: true});
    this.FloatCtrl = this._formBuilder.control('Float',[Validators.pattern('^\\d+\\.\\d{2}$')]);
    this.IntegerCtrl = this._formBuilder.control('Integer', [Validators.pattern('^\\d+\\.\\d{2}$')]);
    this.DateCtrl = this._formBuilder.control('');
    this.TimeCtrl = this._formBuilder.control('');
    this.MemoCtrl = this._formBuilder.control('Memo');
    this.Lookup1Ctrl = this._formBuilder.control('Lookup1');
    this.Lookup2Ctrl = this._formBuilder.control('Lookup2');
    this.CreatedOnCtrl = this._formBuilder.control({value: 'CreatedOn', disabled: true});
    this.ModifiedOnCtrl = this._formBuilder.control({value: 'ModifiedOn', disabled: true});
    this.CreatedByCtrl = this._formBuilder.control({value: 'CreatedBy', disabled: true});
    this.ModifiedByCtrl = this._formBuilder.control({value: 'ModifiedBy', disabled: true});

    this.DS_SampleForm = this._formBuilder.group({
      Code: this.CodeCtrl,
      Description: this.DescriptionCtrl,
      IsActive: this.IsActiveCtrl,
      IsDeleted: this.IsDeletedCtrl,
      Float: this.FloatCtrl,
      Integer: this.IntegerCtrl,
      Date: this.DateCtrl,
      Time: this.TimeCtrl,
      Memo: this.MemoCtrl,
      Lookup1: this.Lookup1Ctrl,
      Lookup2: this.Lookup2Ctrl,
      CreatedOn: this.CreatedOnCtrl,
      ModifiedOn: this.ModifiedOnCtrl,
      CreatedBy: this.CreatedByCtrl,
      ModifiedBy: this.ModifiedByCtrl,
    });
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
