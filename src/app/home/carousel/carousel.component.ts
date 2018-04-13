import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';

export class Image {
  path: string;
  caption: string;
  dis: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('dis', [
      transition('none => block', [
        style({opacity: 0.4}),
        animate('1500ms ease-out', style({ opacity : 1})),
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  images: Image[];
  slideIndex = 1;

  constructor() { }

  ngOnInit() {

    this.images = [
      {path: "assets/img/slide1.jpeg", caption: 'Hiking and Trekking', dis: 'none'},
      {path: "assets/img/slide2.jpeg", caption: 'White Water Rafting', dis: 'none'},
    ]

    this.showSlides(this.slideIndex);
  }

  showSlides(n){
    let i;

    if (n > this.images.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.images.length}

    for (let image of this.images) {
      image.dis = 'none';
    }

    this.images[this.slideIndex - 1].dis = 'block';

  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

}
