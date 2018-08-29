import { Component, Directive, ElementRef, Renderer } from '@angular/core';
// declare const Swiper;

/**
 * 引入 perfect-scrollbar
 */
const swiper = require('swiper');
 require('./idangerous.swiper.css');
 require('./swiper.css');
/*
 * 指令
 */
@Directive({
    selector: '[swiper]' // 用 [ ] 代表 属性
})
export class SwiperDirective {
    constructor(element: ElementRef, renderer: Renderer) {

        // renderer.setElementStyle(element.nativeElement, 'position', 'relative');
        // <div class="swiper-pagination" > </div>

        setTimeout(() => {
            const pagination = document.createElement('div');
            pagination.className = 'swiper-pagination';
            element.nativeElement.appendChild(pagination);
            new swiper(element.nativeElement, {
                direction: 'horizontal',
                loop: true,
                simulateTouch: false,
                autoplay: 2000, // 可选选项，自动滑动
                // 如果需要分页器
                pagination: pagination,
                paginationClickable: true,

                preloadImages: true,
                updateOnImagesReady: true,
            });
        }, 15);

    }

}

    // <div class="swiper-container swiper" swiper>
    //     <div class="swiper-wrapper">
    //         <div class="swiper-slide" >
    //             <img src="{{item}}" alt="">
    //         </div>
    //     </div>
    // </div>
