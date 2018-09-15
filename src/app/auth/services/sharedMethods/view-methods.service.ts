import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router, } from '@angular/router';
import { TitleFromRoutingService } from '../../services/title-from-routing.service';

@Injectable({
  providedIn: 'root'
})
export class ViewMethodsService {

  constructor(private titleFromRouting: TitleFromRoutingService, private activatedRoute: ActivatedRoute,) { }

  updateTitle(activatedRoute: ActivatedRoute) {
    this.titleFromRouting.changeTitle(activatedRoute.snapshot.data['pagetitle'],activatedRoute.snapshot.data['subtitle']);
  }
}
