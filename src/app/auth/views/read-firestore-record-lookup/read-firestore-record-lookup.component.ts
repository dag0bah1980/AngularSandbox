import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router,ActivatedRouteSnapshot } from '@angular/router';


import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'


import * as FSdata from '../../models/fire-base-data'


interface Users {
  id: string;
  birthday: Date;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}
@Component({
  selector: 'angsand-read-firestore-record-lookup',
  templateUrl: './read-firestore-record-lookup.component.html',
  styleUrls: ['./read-firestore-record-lookup.component.css']
})
export class ReadFirestoreRecordLookupComponent implements OnInit {

  //From: https://coursetro.com/posts/code/94/Use-Angular-with-Google's-Cloud-Firestore---Tutorial
  //usersCollection: AngularFirestoreCollection<Users>;
  //users: Observable<Users[]>;

  public usersCollection: AngularFirestoreCollection<FSdata.Users>;
  public users: Observable<FSdata.Users[]>;

  usernamestring: string ="";
  idstring: string="";
  show: boolean = true;

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute, private afs: AngularFirestore) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  ngOnInit() {

    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.usersCollection = this.afs.collection<FSdata.Users>('Users', ref => ref.where('username', '==', this.usernamestring)); //Users is the name of the collection found in FireStore
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as FSdata.Users;
            const id = a.payload.doc.id;
            return { id, ...data };
        });
        })
    );
    
    /*this.afs.firestore.collection('users')
        .where('id','==', 'bJECHgn8dL18bAoZli07')
        .get()
        .then(querySnapshot => {
                querySnapshot.forEach(function (doc) {
                      console.log(doc.id); // id of doc
                      console.log(doc.data()); // data of doc
                })
         });
    */

    //this.usersCollection = this.afs.collection('Users');
    //this.users = this.usersCollection.valueChanges();
  }

  searchByUsername(){
    console.log(this.usernamestring);
    this.usersCollection = this.afs.collection<FSdata.Users>('Users', ref => ref.where('username', '==', this.usernamestring)); //Users is the name of the collection found in FireStore
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

  
  searchByID(){
    console.log(this.idstring);
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
}
