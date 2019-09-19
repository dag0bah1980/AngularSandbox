import { Component, OnInit,Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'angsand-badge-date',
  templateUrl: './badge-date.component.html',
  styleUrls: ['./badge-date.component.css']
})
export class BadgeDateComponent implements OnInit {

  @Input() _Date: string;
  _month: string;
  _day: string;
  _time: string; 
  _fulldate: string

  constructor() { 
    
  }

  ngOnInit() {
    this._month = moment(this._Date).format('MMM');
    this._day = moment(this._Date).format('DD');
    this._time = moment(this._Date).format('hh:mm a');
    console.log(this._month);
    console.log(this._day);
    console.log(this._time);

  }

}
