import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';


@Component({
  selector: 'angsand-datasetup',
  templateUrl: './datasetup.component.html',
  styleUrls: ['./datasetup.component.css']
})
export class DatasetupComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute, ) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
