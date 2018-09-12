import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { TitleFromRoutingService } from '../../services/title-from-routing.service';


@Component({
  selector: 'angsand-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private titleFromRouting: TitleFromRoutingService) {
    
   }

  ngOnInit() {
    this.newTitle();
  }

  newTitle() {
    this.titleFromRouting.changeTitle(this.activatedRoute.snapshot.data['pagetitle'],this.activatedRoute.snapshot.data['subtitle']);
  }
}
