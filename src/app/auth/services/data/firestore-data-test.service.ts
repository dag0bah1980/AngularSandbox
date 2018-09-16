import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";


@Injectable({
  providedIn: 'root'
})
export class FirestoreDataTestService {

  constructor(private db: AngularFirestore) { }
}
