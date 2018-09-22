import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TitleFromRoutingService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  private pageTitleSource = new BehaviorSubject('default PageTitle');
  pageTitleMessage = this.pageTitleSource.asObservable();

  private subTitleSource = new BehaviorSubject('default SubTitle');
  subTitleMessage = this.subTitleSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changeTitle(pageTitle:string, subTitle: string){
    this.pageTitleSource.next(pageTitle);
    this.subTitleSource.next(subTitle);
  }

  changeTitleNew(actRoute: ActivatedRoute){
    //console.log('activatedroutesnapshot2:'+actRoute.snapshot.firstChild);
    console.log('length:'+actRoute.snapshot.children.length);
    if (actRoute.snapshot.children.length === null || actRoute.snapshot.children.length === 0) {
      this.pageTitleSource.next(actRoute.snapshot.data['pagetitle']);
      this.subTitleSource.next(actRoute.snapshot.data['subtitle']);
    }
    else {
      this.pageTitleSource.next(actRoute.snapshot.firstChild.data['pagetitle']);
      this.subTitleSource.next(actRoute.snapshot.firstChild.data['subtitle']);
    }
    //console.log('activatedroutesnapshot2:'+actRoute.snapshot.firstChild.data['pagetitle']);
    
  }
}
