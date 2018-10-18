import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot} from '@angular/router';  

@Component({
  selector: 'angsand-delete-logical-firestore-record',
  templateUrl: './delete-logical-firestore-record.component.html',
  styleUrls: ['./delete-logical-firestore-record.component.css']
})
export class DeleteLogicalFirestoreRecordComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) { 
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
