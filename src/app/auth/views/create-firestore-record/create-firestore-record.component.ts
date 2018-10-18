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
    this._viewMethodsService.updateTitle(this._activatedRoute);
    console.log('childlength:'+_activatedRoute.children.length);
   }

   ngOnInit() {
    
    this._viewMethodsService.updateTitle(this._activatedRoute);
    console.log('childlength:'+this._activatedRoute.children.length);
  }

}
