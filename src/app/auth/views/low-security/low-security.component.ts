import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'angsand-low-security',
  templateUrl: './low-security.component.html',
  styleUrls: ['./low-security.component.css']
})
export class LowSecurityComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, public _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
