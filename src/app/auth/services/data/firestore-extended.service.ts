import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";
import { map } from 'rxjs/operators'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class FirestoreExtendedService {

  //https://angular-templates.io/tutorials/about/angular-crud-with-firebase
  constructor(public afs: AngularFirestore) { }

  getUsers(){
    return this.afs.collection('Users').snapshotChanges();
  }

  getUserByUsername(userName){
    
    return this.afs.collection('Users',ref => ref.where('username', '>=', userName)
    .where('username', '<=', userName + '\uf8ff'))
    .snapshotChanges()
     
  }


  getUserByDocID(docID){
    return this.afs.collection('Users', ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', docID)).snapshotChanges();
     
  }

}
