import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'angsand-delete-perm-firestore-record',
  templateUrl: './delete-perm-firestore-record.component.html',
  styleUrls: ['./delete-perm-firestore-record.component.css']
})
export class DeletePermFirestoreRecordComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }

}
