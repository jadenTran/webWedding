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
      "assets/imgages/preWedding/LVH_3671.JPG"
    ),
    new Gallery(
      2,
      "HCM",
      'assets/imgages/preWedding/LVH_3737.JPG'
    ),
    new Gallery(
      3,
      "HCM",
      'assets/imgages/preWedding/LVH_4158.JPG'
    ),new Gallery(
      4,
      "HCM",
      'assets/imgages/preWedding/LVH_4240.JPG'
    ),new Gallery(
      5,
      "HCM",
      'assets/imgages/preWedding/LVH_4441.JPG'
    ),new Gallery(
      6,
      "HCM",
      'assets/imgages/preWedding/LVH_4541.JPG'
    ),new Gallery(
      7,
      "HCM",
      'assets/imgages/preWedding/LVH_4665.JPG'
    ),new Gallery(
      8,
      "HCM",
      'assets/imgages/preWedding/LVH_3989.JPG'
    ),new Gallery(
      9,
      "HCM",
      'assets/imgages/preWedding/LVH_5206.JPG'
    ),new Gallery(
      10,
      "HCM",
      'assets/imgages/preWedding/LVH_5450.JPG'
    ),new Gallery(
      11,
      "HCM",
      'assets/imgages/preWedding/LVH_5623.JPG'
    ),new Gallery(
      12,
      "HCM",
      'assets/imgages/preWedding/LVH_5864.JPG'
    ),new Gallery(
      13,
      "HCM",
      'assets/imgages/preWedding/LVH_3932.JPG'
    ),new Gallery(
      14,
      "HCM",
      'assets/imgages/preWedding/LVH_4818.JPG'
    ),new Gallery(
      40,
      "HCM",
      "assets/imgages/preWedding/LVH_3693.JPG"
    ),
    new Gallery(
      41,
      "HCM",
      'assets/imgages/preWedding/LVH_3696.JPG'
    ),
    new Gallery(
      42,
      "HCM",
      'assets/imgages/preWedding/LVH_3711.JPG'
    ),new Gallery(
      43,
      "HCM",
      'assets/imgages/preWedding/LVH_3737.JPG'
    ),new Gallery(
      44,
      "HCM",
      'assets/imgages/preWedding/LVH_3805.JPG'
    ),new Gallery(
      45,
      "HCM",
      'assets/imgages/preWedding/LVH_3844.JPG'
    ),new Gallery(
      46,
      "HCM",
      'assets/imgages/preWedding/LVH_3886.JPG'
    ),new Gallery(
      47,
      "HCM",
      'assets/imgages/preWedding/LVH_4460.JPG'
    ),new Gallery(
      48,
      "HCM",
      'assets/imgages/preWedding/LVH_4541.JPG'
    ),new Gallery(
      49,
      "HCM",
      'assets/imgages/preWedding/LVH_4648.JPG'
    ),new Gallery(
      50,
      "HCM",
      'assets/imgages/preWedding/LVH_4665.JPG'
    ),new Gallery(
      51,
      "HCM",
      'assets/imgages/preWedding/LVH_4763.JPG'
    ),new Gallery(
      52,
      "HCM",
      'assets/imgages/preWedding/LVH_4764.JPG'
    ),new Gallery(
      53,
      "HCM",
      'assets/imgages/preWedding/LVH_4818.JPG'
    ),new Gallery(
      54,
      "HCM",
      'assets/imgages/preWedding/LVH_3805.JPG'
    ),
  ]
}
