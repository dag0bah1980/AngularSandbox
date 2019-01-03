import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router,ActivatedRouteSnapshot } from '@angular/router';


import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'


import * as FSdata from '../../models/fire-base-data'
import { FirestoreDataTestService } from '../../services/data/firestore-data-test.service';

@Component({
  selector: 'angsand-create-firestore-record',
  templateUrl: './create-firestore-record.component.html',
  styleUrls: ['./create-firestore-record.component.css']
})
export class CreateFirestoreRecordComponent implements OnInit {

  public usersCollection: AngularFirestoreCollection<FSdata.Users>;
  public users: Observable<FSdata.Users[]>;

  //prodcollection: AngularFirestoreCollection<any> = this.afs.collection('products');
  usernamestring: string ="";
  firstnamestring: string ="";
  lastnamestring: string ="";
  emailstring: string ="";


  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute, private afs: AngularFirestore, private _firestoreDataTestService: FirestoreDataTestService) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    //console.log('childlength:'+_activatedRoute.children.length);
   }

   ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    //this.refresh();
  }

  refresh(){
    this._firestoreDataTestService.getUsersWithID();
    //this.usersCollection = this._firestoreDataTestService.usersCollection;
    //this.users = this._firestoreDataTestService.users;
    this.usersCollection = this.afs.collection('Users'); //Users is the name of the collection found in FireStore
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as FSdata.Users;
            const id = a.payload.doc.id;
            return { id, ...data };
        });
        })
    );
  }

  

  addUser(){
    
  }
  

}
