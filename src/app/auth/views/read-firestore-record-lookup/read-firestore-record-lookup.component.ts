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
  selector: 'angsand-read-firestore-record-lookup',
  templateUrl: './read-firestore-record-lookup.component.html',
  styleUrls: ['./read-firestore-record-lookup.component.css']
})
export class ReadFirestoreRecordLookupComponent implements OnInit {

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

  //C(reate) in CRUD functions
  createUser(value){
    return this.afs.collection('Users').add({
      name: value.name,
      surname: value.surname,
      age: parseInt(value.age)
    });
  }

  //R(ead) in CRUD functions
  getData(){
    this._FirestoreExtendedService.getUsers()
    .subscribe(result => {
      this.items = result;
    })
  }


  searchByUsername(){
    console.log(this.usernamestring);
    this._FirestoreExtendedService.getUserByUsername(this.usernamestring)
    .subscribe(result => {
      this.items = result;
    })  
  }

  
  searchByID(){
    console.log(this.idstring);    
    this._FirestoreExtendedService.getUserByDocID(this.idstring)
    .subscribe(result => {
      this.items = result;
    }) ;
  }
}
