import { Component, OnInit } from '@angular/core';
import * as flipdown from 'flipdown';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  days:number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  constructor() { }

  ngOnInit() {
    this.updateCountdown();

    setInterval(() => {
      this.updateCountdown()
    },1000)

  }
  updateCountdown() {
    const countdownDate = new Date('2024-04-13T00:00:00Z').getTime();
    const currentDate = new Date().getTime();
    const timeDifference = countdownDate - currentDate;


    this.days = Math.floor(timeDifference / (1000 * 60 * 60 *24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference  % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }
}
