import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router,ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'



@Component({
  selector: 'angsand-firestoresample',
  templateUrl: './firestoresample.component.html',
  styleUrls: ['./firestoresample.component.css']
})

export class FirestoresampleComponent implements OnInit {

  

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitleNew(_activatedRoute);

   }

  ngOnInit() {
    this._viewMethodsService.updateTitleNew(this._activatedRoute);
    
  }

}
