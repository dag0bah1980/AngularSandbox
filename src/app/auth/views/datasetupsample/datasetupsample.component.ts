import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Priority, Severity } from '../../models/DS_interfaces';


import { Observable, throwError } from 'rxjs';

import { DatasetupService } from '../../services/data/datasetup.service';
import { map } from 'rxjs/operators';

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
  cities1: City[];
  cities2: City[];
  selectedCity: City;

  //For Dropdowns:
  priorities: Priority[];
  selectedPriority: Priority;

  severities: Severity[];
  selectedSeverity: Severity;
  //Severities

  //For Form example
  Code: String;
  date7: Date;
  date8: Date;

  selectedIsActive:boolean;
  
  DS_SampleForm = new FormGroup({
    Code: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3),Validators.maxLength(32)]),
    Description: new FormControl('', [Validators.minLength(3),Validators.maxLength(512)]),
    IsActive: new FormControl(true),
    IsDeleted: new FormControl({value:false,disabled: true}),
    Float: new FormControl('', [Validators.pattern('^\\d+\\.\\d{2}$')]), //two decimal places indicated by {2}
    Integer: new FormControl('', [Validators.pattern('^[0-9]*$')]),
    Date: new FormControl(''),
    Time: new FormControl(''),
    Memo: new FormControl(''),
    Priority: new FormControl(''),
    Severity: new FormControl(''),
    CreatedOn: new FormControl(''),
    ModifiedOn: new FormControl(''),
    CreatedBy: new FormControl(''),
    ModifiedBy: new FormControl(''),
  });

  onSubmitTest() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.DS_SampleForm.value);
    console.log("test");
    
  }

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private _dataSetupService: DatasetupService) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this._dataSetupService.getPrioritiesDropDown()
    .subscribe(
      (res : Priority[])=>{
        console.log(res);
        this.priorities = res;
      },
      error =>  {
        console.log(error);
        this.DS_SampleForm.get('Priority').disable();
      },
      () => console.log('Completed')
      );

    this._dataSetupService.getSeveritiesDropDown()
      .subscribe(
        (res : Severity[])=>{
          console.log(res);
          this.severities = res;
        },
        error => console.log(error),
        () => console.log('Completed')
        );
    
    this.selectedIsActive = true;
    

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
  PriorityCtrl: FormControl;
  SeverityCtrl: FormControl;
  CreatedOnCtrl: FormControl;
  ModifiedOnCtrl: FormControl;
  CreatedByCtrl: FormControl;
  ModifiedByCtrl: FormControl;

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    
    this.CodeCtrl = this._formBuilder.control({value:'Code'}, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3),Validators.maxLength(32)]);
    this.DescriptionCtrl = this._formBuilder.control('', [Validators.minLength(3),Validators.maxLength(512)]);
    this.IsActiveCtrl = this._formBuilder.control(true);
    this.IsDeletedCtrl = this._formBuilder.control({value:false, disabled: true});
    this.FloatCtrl = this._formBuilder.control('',[Validators.pattern('^\\d+\\.\\d{2}$')]);
    this.IntegerCtrl = this._formBuilder.control('', [Validators.pattern('^\\d+\\.\\d{2}$')]);
    this.DateCtrl = this._formBuilder.control('');
    this.TimeCtrl = this._formBuilder.control('');
    this.MemoCtrl = this._formBuilder.control('');
    this.PriorityCtrl = this._formBuilder.control('');
    this.SeverityCtrl = this._formBuilder.control('');
    this.CreatedOnCtrl = this._formBuilder.control({value: '', disabled: true});
    this.ModifiedOnCtrl = this._formBuilder.control({value: '', disabled: true});
    this.CreatedByCtrl = this._formBuilder.control({value: '', disabled: true});
    this.ModifiedByCtrl = this._formBuilder.control({value: '', disabled: true});

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
      Priority: this.PriorityCtrl,
      Severity: this.SeverityCtrl,
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
    
  }
}
