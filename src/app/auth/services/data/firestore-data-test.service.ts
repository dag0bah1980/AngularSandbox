import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import * as FSdata from '../../models/fire-base-data'

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataTestService {

  //Derived From: https://coursetro.com/posts/code/94/Use-Angular-with-Google's-Cloud-Firestore---Tutorial
  public usersCollection: AngularFirestoreCollection<FSdata.Users>;
  public users: Observable<FSdata.Users[]>;

  constructor(private db: AngularFirestore) { 
    
  }

  getUsers(){
    this.usersCollection = this.db.collection('Users'); //Users is the name of the collection found in FireStore
    this.users = this.usersCollection.valueChanges();
  }

  getUsersWithID(){
    this.usersCollection = this.db.collection<FSdata.Users>('Users'); //Users is the name of the collection found in FireStore
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
