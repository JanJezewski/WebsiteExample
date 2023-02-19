import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: `
    <button (click)="showCalendar = !showCalendar">{{ showCalendar ? 'Hide' : 'Show' }} Calendar</button>
    <div *ngIf="showCalendar">
    <div class="month">
      <ul>
        <li class="prev">&#10094;</li>
        <li class="next">&#10095;</li>
        <li>August<br><span style="font-size:18px">2021</span></li>
      </ul>
    </div>
    
    
    </div>
  `
})
export class CalendarComponent implements OnInit {
  showCalendar = false;

  ngOnInit() {
  }
}