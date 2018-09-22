import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TitleFromRoutingService } from '../../services/title-from-routing.service';

@Injectable({
  providedIn: 'root'
})
export class ViewMethodsService {

  constructor(private titleFromRouting: TitleFromRoutingService, private _activatedRoute: ActivatedRoute) {
    //this.titleFromRouting.changeTitle(_activatedRoute.snapshot.data['pagetitle'],_activatedRoute.snapshot.data['subtitle']);
    this.titleFromRouting.changeTitleNew(_activatedRoute);
   }

  updateTitle(actRoute: ActivatedRoute) {
    this.titleFromRouting.changeTitle(actRoute.snapshot.data['pagetitle'],actRoute.snapshot.data['subtitle']);
  }

  updateTitleNew(actRoute: ActivatedRoute) {
    //console.log(activatedRoute.snapshot);
    console.log('activatedroutesnapshot1:'+actRoute.snapshot.firstChild);
    //console.log(activatedRoute.snapshot.data['pagetitle']);
    //console.log(activatedRoute.snapshot.firstChild.data['pagetitle']);
    //var children = actRoute.children;
    //console.log(children.length)
    //this.titleFromRouting.changeTitle(actRoute.snapshot.data['pagetitle'],actRoute.snapshot.data['subtitle']);
    this.titleFromRouting.changeTitleNew(actRoute);
  }
}
