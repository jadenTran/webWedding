import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  callPhoneNumber(phoneNumber: string) {
    window.location.href = 'tel:' + phoneNumber;
  }

}
