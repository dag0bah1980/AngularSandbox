import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})

export class FirestoreExtendedService {

  constructor(public afs: AngularFirestore) { }

  getUsers(){
    return this.afs.collection('Users').snapshotChanges();
  }
}
