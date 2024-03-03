import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallerys-child',
  templateUrl: './gallerys-child.component.html',
  styleUrls: ['./gallerys-child.component.scss']
})
export class GallerysChildComponent implements OnInit {

  constructor() { }
  _imgInfo: any;
  @Input() set imgInfo(value: string) {
    this._imgInfo= value;
  };
  @Input() galleryList: any;
  @Output() closeImgEvent = new EventEmitter();

  get gallery(): any {
    return this._imgInfo;
  }

  ngOnInit(): void {
  }

  prevImg(img: any) {
    const index = this.galleryList.indexOf(img);
    if(index === 0) {
      this._imgInfo = this.galleryList[this.galleryList.length -1];
      return;
    }
    this._imgInfo = this.galleryList[index - 1];
  }

  nextImg(img: any) {
    const index = this.galleryList.indexOf(img);
    if(index === this.galleryList.length - 1) {
      this._imgInfo = this.galleryList[0];
      return;
    }
    this._imgInfo = this.galleryList[index + 1];
  };

  closeImg() {
    this.closeImgEvent.emit();
  }

}
