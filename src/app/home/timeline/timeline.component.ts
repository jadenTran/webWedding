import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  myIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  this.carousel();
  }

  carousel(): void {
    const x = document.getElementsByClassName("slider-item") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    this.myIndex++;
    if (this.myIndex > x.length) {
      this.myIndex = 1;
    }

    x[this.myIndex - 1].style.display = "flex";
    setTimeout(() => this.carousel(), 5000);
  }
}
