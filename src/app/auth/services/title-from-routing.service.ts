import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


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
}
