import { Component, OnInit } from '@angular/core';
import { TitleFromRoutingService } from '../../../../services/title-from-routing.service';

@Component({
  selector: 'angsand-main-content-title',
  templateUrl: './main-content-title.component.html',
  styleUrls: ['./main-content-title.component.css']
})
export class MainContentTitleComponent implements OnInit {

  PageTitle: string;
  SubTitle: string;

  message:string;
  
  constructor(private titleFromRouting: TitleFromRoutingService) { }

  ngOnInit() {
    this.titleFromRouting.currentMessage.subscribe(message => this.message = message);
    this.titleFromRouting.pageTitleMessage.subscribe(PageTitle => this.PageTitle = PageTitle);
    this.titleFromRouting.subTitleMessage.subscribe(SubTitle => this.SubTitle = SubTitle);
  }

}
