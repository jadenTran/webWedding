// countdown.service.ts (hoặc countdown.component.ts)
import { Injectable } from '@angular/core';
import { Flipdown } from 'flipdown';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  startCountdown(targetDate: Date) {
    const countdown = new Flipdown(targetDate.getTime());
    countdown.start();
  }
}
