import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery.model';

@Component({
  selector: 'app-prewedding',
  templateUrl: './prewedding.component.html',
  styleUrls: ['./prewedding.component.scss']
})
export class PreweddingComponent implements OnInit {

  imgShow:any;

  constructor() { }

  ngOnInit(): void {
  }

  handleShowImg(img:any) {
    console.log("aaa", img)
    this.imgShow = img;
  }

  gallerys: Array<Gallery> = [
    new Gallery(
      1,
      "HCM",
      "assets/imgages/preWedding/LVH_3671.jpg"
    ),
    new Gallery(
      2,
      "HCM",
      'assets/imgages/preWedding/LVH_3737.jpg'
    ),
    new Gallery(
      3,
      "HCM",
      'assets/imgages/preWedding/LVH_4158.jpg'
    ),new Gallery(
      4,
      "HCM",
      'assets/imgages/preWedding/LVH_4240.jpg'
    ),new Gallery(
      5,
      "HCM",
      'assets/imgages/preWedding/LVH_4441.jpg'
    ),new Gallery(
      6,
      "HCM",
      'assets/imgages/preWedding/LVH_4541.jpg'
    ),new Gallery(
      7,
      "HCM",
      'assets/imgages/preWedding/LVH_4665.jpg'
    ),new Gallery(
      8,
      "HCM",
      'assets/imgages/preWedding/LVH_4460.jpg'
    ),new Gallery(
      9,
      "HCM",
      'assets/imgages/preWedding/LVH_4541.jpg'
    ),new Gallery(
      10,
      "HCM",
      'assets/imgages/preWedding/LVH_4648.jpg'
    ),new Gallery(
      11,
      "HCM",
      'assets/imgages/preWedding/LVH_4665.jpg'
    ),new Gallery(
      12,
      "HCM",
      'assets/imgages/preWedding/LVH_4763.jpg'
    ),new Gallery(
      13,
      "HCM",
      'assets/imgages/preWedding/LVH_4764.jpg'
    ),new Gallery(
      14,
      "HCM",
      'assets/imgages/preWedding/LVH_4818.jpg'
    ),new Gallery(
      40,
      "HCM",
      "assets/imgages/preWedding/LVH_3693.jpg"
    ),
    new Gallery(
      41,
      "HCM",
      'assets/imgages/preWedding/LVH_3696.jpg'
    ),
    new Gallery(
      42,
      "HCM",
      'assets/imgages/preWedding/LVH_3711.jpg'
    ),new Gallery(
      43,
      "HCM",
      'assets/imgages/preWedding/LVH_3737.jpg'
    ),new Gallery(
      44,
      "HCM",
      'assets/imgages/preWedding/LVH_3805.jpg'
    ),new Gallery(
      45,
      "HCM",
      'assets/imgages/preWedding/LVH_3844.jpg'
    ),new Gallery(
      46,
      "HCM",
      'assets/imgages/preWedding/LVH_3886.jpg'
    ),new Gallery(
      47,
      "HCM",
      'assets/imgages/preWedding/LVH_4460.jpg'
    ),new Gallery(
      48,
      "HCM",
      'assets/imgages/preWedding/LVH_4541.jpg'
    ),new Gallery(
      49,
      "HCM",
      'assets/imgages/preWedding/LVH_4648.jpg'
    ),new Gallery(
      50,
      "HCM",
      'assets/imgages/preWedding/LVH_4665.jpg'
    ),new Gallery(
      51,
      "HCM",
      'assets/imgages/preWedding/LVH_4763.jpg'
    ),new Gallery(
      52,
      "HCM",
      'assets/imgages/preWedding/LVH_4764.jpg'
    ),new Gallery(
      53,
      "HCM",
      'assets/imgages/preWedding/LVH_4818.jpg'
    ),new Gallery(
      54,
      "HCM",
      'assets/imgages/preWedding/LVH_3805.jpg'
    ),
  ]
}
