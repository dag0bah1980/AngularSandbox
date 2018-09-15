import { Component, OnInit } from '@angular/core';
import { ViewMethodsService } from '../../services/sharedMethods/view-methods.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'angsand-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private _viewMethodsService: ViewMethodsService, private _activatedRoute: ActivatedRoute) {
    this._viewMethodsService.updateTitle(this._activatedRoute);
   }

  ngOnInit() {
    this._viewMethodsService.updateTitle(this._activatedRoute);
  }
}
