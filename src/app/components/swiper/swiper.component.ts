import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'home-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {

  constructor() {


  };

  slideshow() {
    // alert(1);
    let slideshow = document.getElementsByClassName('bannerPicList')[0];
    let imgs = slideshow.getElementsByTagName('img');
    let current = 0;

    function slideOff() {
      $(imgs[current]).fadeOut(1000);
    }
    function slideOn() {
      $(imgs[current]).fadeIn(2000);
    }

    function changeSlide() {
      slideOff();
      current++;
      if (current >= 4) current = 0;
      slideOn();
    }
    changeSlide();
    let slideon = setInterval(changeSlide, 3000);
  }



  ngOnInit() { this.slideshow(); };

}
