import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router,ActivatedRouteSnapshot } from '@angular/router';


import { AngularFirestoreDocument,  AngularFirestore,  AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

interface Users {
  birthday: Date;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

@Component({
  selector: 'angsand-read-firestore-record',
  templateUrl: './read-firestore-record.component.html',
  styleUrls: ['./read-firestore-record.component.css']
})
export class ReadFirestoreRecordComponent implements OnInit {

  //From: https://coursetro.com/posts/code/94/Use-Angular-with-Google's-Cloud-Firestore---Tutorial
  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  show: boolean = true;

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute, private afs: AngularFirestore) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
    this.usersCol = this.afs.collection('Users');
    this.users = this.usersCol.valueChanges();
  }

}
