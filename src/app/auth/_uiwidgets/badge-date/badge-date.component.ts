import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'angsand-badge-date',
  templateUrl: './badge-date.component.html',
  styleUrls: ['./badge-date.component.css']
})
export class BadgeDateComponent implements OnInit {

  @Input() Date: string;

  constructor() { }

  ngOnInit() {
    
  }

}
