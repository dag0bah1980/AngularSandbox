import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'angsand-standardviewsetup',
  templateUrl: './standardviewsetup.component.html',
  styleUrls: ['./standardviewsetup.component.css']
})
export class StandardviewsetupComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
