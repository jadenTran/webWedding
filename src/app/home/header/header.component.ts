import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isChecked = false

  ngOnInit(): void {
  }

  closeNavi() {
    this.isChecked = !this.isChecked;
    if(!this.isChecked){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

}
