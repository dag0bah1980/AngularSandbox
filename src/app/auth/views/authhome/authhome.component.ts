import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'angsand-authhome',
  templateUrl: './authhome.component.html',
  styleUrls: ['./authhome.component.css']
})
export class AuthhomeComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

   ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  
}
