import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DS_Sample, Priority, Severity } from '../../models/DS_interfaces';
import { DatasetupService } from '../../services/data/datasetup.service';

@Component({
  selector: 'angsand-datasetupsample',
  templateUrl: './datasetupsample.component.html',
  styleUrls: ['./datasetupsample.component.css']
})
export class DatasetupsampleComponent implements OnInit {

  FormState: String;

  //Current DataSetup Sample
  currentDS_Sample: DS_Sample;

  //For currentValues;
  selectedIsActive:boolean;
  selectedIsDeleted:boolean;

  //For Dropdowns:
  priorities: Priority[];
  selectedPriority: Priority;
  //make priority dropdown disabled by default
  priorityLoading: boolean = true;

  severities: Severity[];
  selectedSeverity: Severity;
  //Severities

  //For Form example
  //Code: String;
  date7: Date;
  date8: Date;

  disabled: boolean = true;
  display;

  //Editor example
  text: string;

  //Form Controls used
  
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
  

  //Do I need this?
  /*
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
  });*/

  DS_SampleForm;

  priorityButtonIcon = "fa fa-spinner fa-pulse fa-fw";
  severityButtonIcon = "fa fa-spinner fa-pulse fa-fw";

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private _dataSetupService: DatasetupService) {    
    //this._viewMethodsService.updateTitle(this._activatedRoute);

  }

  id: number;
  private sub: any;

  ngOnInit() {   
    this.FormState = 'NEW';
    this.CodeCtrl = this._formBuilder.control('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3),Validators.maxLength(32)]);
    this.DescriptionCtrl = this._formBuilder.control('', [Validators.minLength(3),Validators.maxLength(512)]);
    this.IsActiveCtrl = this._formBuilder.control(true);
    this.IsDeletedCtrl = this._formBuilder.control({value:false, disabled: true});
    this.FloatCtrl = this._formBuilder.control('',[Validators.pattern('^\\d+\\.\\d{2}$')]);
    this.IntegerCtrl = this._formBuilder.control('', [Validators.pattern('^\\d+\\.\\d{2}$')]);
    this.DateCtrl = this._formBuilder.control('');
    this.TimeCtrl = this._formBuilder.control('');
    this.MemoCtrl = this._formBuilder.control('');
    this.PriorityCtrl = this._formBuilder.control({value: null, disabled: true});
    this.SeverityCtrl = this._formBuilder.control({value: null, disabled: true});
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


    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != 0) {
        console.log('Edit');
        this.FormState = 'EDIT';

        this._dataSetupService.getDS_Sample(this.id)
          .subscribe(
          (res : DS_Sample)=>{
            console.log(res);
            this.currentDS_Sample = res;
          },
          error => {
            console.log(error);
          },
          () =>  {
            console.log('Completed'+this.currentDS_Sample[0].CODE);
          }
          );
      } else {
        console.log('New');
        this.FormState = 'NEW';
    
      }
      // In a real app: dispatch action to load the details here.

      
   });

    this._dataSetupService.getPrioritiesDropDown()
    .subscribe(
      (res : Priority[])=>{
        this.priorityButtonIcon = "fa fa-spinner fa-pulse fa-fw"
        //console.log(res);
        this.priorities = res;
      },
      error =>  {
        console.log(error);
        this.DS_SampleForm.get('Priority').disable();
        this.priorityButtonIcon = "fa fa-exclamation-triangle";
      },
      () =>  {
        this.DS_SampleForm.get('Priority').enable();
        this.priorityButtonIcon = "fa fa-sort-numeric-asc";
        //console.log('Completed');
      }
    );

    this._dataSetupService.getSeveritiesDropDown()
      .subscribe(
        (res : Severity[])=>{
          this.severityButtonIcon = "fa fa-spinner fa-pulse fa-fw"
          //console.log(res);
          this.severities = res;
        },
        error =>  {
          console.log(error);
          this.DS_SampleForm.get('Severity').disable();
          this.severityButtonIcon = "fa fa-exclamation-triangle";
        },
        () =>  {
          this.DS_SampleForm.get('Severity').enable();
          this.severityButtonIcon = "fa fa-thermometer";
          //console.log('Completed');
        }
      );

    //just to demo true checkbox
    //this.selectedIsActive = true;

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.DS_SampleForm.value);
    console.log("test");
    
  }


}
