import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

import { FirestoreDataTestService } from '../../services/data/firestore-data-test.service';

@Component({
  selector: 'angsand-authhome',
  templateUrl: './authhome.component.html',
  styleUrls: ['./authhome.component.css']
})
export class AuthhomeComponent implements OnInit {

  usersCol;
  users;

  constructor(private _viewMethodsService: ViewMethodsService, private _firestoreDataTestService: FirestoreDataTestService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

   ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this._firestoreDataTestService.getUsersWithID();
    this.usersCol = this._firestoreDataTestService.usersCollection;
    this.users = this._firestoreDataTestService.users;
  }

  
}
