import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'angsand-connect-api',
  templateUrl: './connect-api.component.html',
  styleUrls: ['./connect-api.component.css']
})
export class ConnectApiComponent implements OnInit {

  private DataAPIURL: string;
  DataAPIForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
  
    this.createForm();  

   }

  createForm() {
    this.DataAPIForm = this.fb.group({
        DataAPIURLvalue: [this.DataAPIURL, Validators.required ]
    });
  }

  updateDataAPIURL() {
    
  }

  ngOnInit() {
  }


}
