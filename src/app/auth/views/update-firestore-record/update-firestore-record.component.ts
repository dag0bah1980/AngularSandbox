import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'angsand-update-firestore-record',
  templateUrl: './update-firestore-record.component.html',
  styleUrls: ['./update-firestore-record.component.css']
})
export class UpdateFirestoreRecordComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
