import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Gallery } from 'src/app/models/gallery.model';

@Component({
  selector: 'app-ourmemory',
  templateUrl: './ourmemory.component.html',
  styleUrls: ['./ourmemory.component.scss']
})
export class OurmemoryComponent implements OnInit {


  addressList: any;
  imgShow: any;
  @ViewChildren('dialog', {read: ElementRef}) dialog?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.addressList = this.gallerys.map((item: Gallery) => {
      return item.name;
    }).filter((x, i, a) => a.indexOf(x) === i)
    console.log("==address", this.addressList);
  }

  handleShowImg(img: any) {
    this.imgShow = img;
    if(this.dialog) {
      document.body.appendChild(this.dialog.nativeElement);
    }

  };




  gallerys: Array<Gallery> = [
    new Gallery(
      1,
      "Hà Giang",
      "assets/imgages/preWedding/LVH_5151.JPG"
    ),
    new Gallery(
      2,
      "Hà Giang",
      'assets/imgages/preWedding/LVH_3696.JPG'
    ),
    new Gallery(
      3,
      "Hồ Chí Minh",
      'assets/imgages/preWedding/LVH_3715.JPG'
    ),new Gallery(
      4,
      "Hồ Chí Minh",
      'assets/imgages/preWedding/LVH_3737.JPG'
    ),new Gallery(
      5,
      "Hà Nội",
      'assets/imgages/preWedding/LVH_4441.JPG'
    ),new Gallery(
      6,
      "Hà Nội",
      'assets/imgages/preWedding/LVH_4541.JPG'
    ),new Gallery(
      7,
      "Vũng Tàu",
      'assets/imgages/preWedding/LVH_4665.JPG'
    ),new Gallery(
      8,
      "Vũng Tàu",
      'assets/imgages/preWedding/LVH_5450.JPG'
    ),new Gallery(
      9,
      "Quảng Ngãi",
      'assets/imgages/preWedding/LVH_5535.JPG'
    ),new Gallery(
      10,
      "Quảng Ngãi",
      'assets/imgages/preWedding/LVH_5606.JPG'
    ),new Gallery(
      11,
      "Phú Yên",
      'assets/imgages/preWedding/LVH_5623.JPG'
    ),new Gallery(
      12,
      "Phú Yên",
      'assets/imgages/preWedding/LVH_5864.JPG'
    ),new Gallery(
      13,
      "Bình Thuận",
      'assets/imgages/preWedding/LVH_6296.JPG'
    ),new Gallery(
      14,
      "Bình Thuận",
      'assets/imgages/preWedding/LVH_6539.JPG'
    ),new Gallery(
      15,
      "Đà Lạt",
      'assets/imgages/preWedding/LVH_6382.JPG'
    ),new Gallery(
      16,
      "Đà Lạt",
      'assets/imgages/preWedding/LVH_5606.JPG'
    ),
  ]
  

}
