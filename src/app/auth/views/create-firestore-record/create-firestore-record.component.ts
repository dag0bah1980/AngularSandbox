import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'angsand-create-firestore-record',
  templateUrl: './create-firestore-record.component.html',
  styleUrls: ['./create-firestore-record.component.css']
})
export class CreateFirestoreRecordComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitleNew(this._activatedRoute);
   }

   ngOnInit() {
    
    this._viewMethodsService.updateTitleNew(this._activatedRoute);
  }

}
