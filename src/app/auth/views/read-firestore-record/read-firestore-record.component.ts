import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router,ActivatedRouteSnapshot } from '@angular/router';


import { AngularFirestore,  } from "angularfire2/firestore";
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

import { FirestoreExtendedService } from "../../services/data/firestore-extended.service"


class User {
  constructor(public username: string, public firstname: string, public lastname: string, public email: string, public birthday?: Date, public id?: string) {
  }
}

@Component({
  selector: 'angsand-read-firestore-record',
  templateUrl: './read-firestore-record.component.html',
  styleUrls: ['./read-firestore-record.component.css']
})
export class ReadFirestoreRecordComponent implements OnInit {

  //https://angular-templates.io/tutorials/about/angular-crud-with-firebase
  items: Array<any>;

  usernamestring: string ="";
  idstring: string="";
  show: boolean = true;

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute, private afs: AngularFirestore, private _FirestoreExtendedService: FirestoreExtendedService) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  ngOnInit() {

    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.getData();
  }

  getData(){
    this._FirestoreExtendedService.getUsers()
    .subscribe(result => {
      this.items = result;
    })
  }
}
