import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angsand-badge-user',
  templateUrl: './badge-user.component.html',
  styleUrls: ['./badge-user.component.css']
})
export class BadgeUserComponent implements OnInit {

  @Input() Username: string;

  constructor() { }

  ngOnInit() {
  }

}
