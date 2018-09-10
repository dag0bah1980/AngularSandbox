import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DateTimeService } from '../../../services/date-time.service';

@Component({
  selector: 'angsand-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.css']
})
export class TimeWidgetComponent implements OnInit {

  constructor(private dateTimeService: DateTimeService) { 
  }

  currentDateTime: Date;

  ngOnInit() {
    const threeSeconds = interval(3000);

    threeSeconds.subscribe(x => {
      this.getTime();
    });
  }

  getTime(): void {
    this.dateTimeService.getDateTimeSlowly().then(currentDateTime => this.currentDateTime = currentDateTime);
  }

  onClick() {
    
  }

}
