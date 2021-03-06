import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'angsand-mixed-security-on-content',
  templateUrl: './mixed-security-on-content.component.html',
  styleUrls: ['./mixed-security-on-content.component.css']
})
export class MixedSecurityOnContentComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
