import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { TitleFromRoutingService } from '../../services/title-from-routing.service';

@Component({
  selector: 'angsand-authhome',
  templateUrl: './authhome.component.html',
  styleUrls: ['./authhome.component.css']
})
export class AuthhomeComponent implements OnInit {

  message:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private titleFromRouting: TitleFromRoutingService) { 
    console.log(activatedRoute.snapshot.data['pagetitle']);
    this.newMessage();
  }

  ngOnInit() {
    this.titleFromRouting.currentMessage.subscribe(message => this.message = message);
    this.newMessage();
    this.newTitle();
  }

  newMessage() {
    this.titleFromRouting.changeMessage("Hello from AuthHome")
  }

  newTitle() {
    this.titleFromRouting.changeTitle(this.activatedRoute.snapshot.data['pagetitle'],this.activatedRoute.snapshot.data['subtitle']);
  }
}
