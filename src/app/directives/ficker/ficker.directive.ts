import {
    Component,
    Input,
    Output,
    HostListener,
    Directive,
    ElementRef,
    Renderer,
    EventEmitter,
    DoCheck,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

import { animationOn } from '../../../app-config.animation';
/*
 * 指令
 * XLarge 字体变大
 */
@Directive({
    selector: '[ficker1]' // 用 [ ] 代表 属性
})
export class Ficker1Directive implements OnChanges {
    animation;
    @Input('ficker1') ficker1: any;
    @Output() cancelAnimation = new EventEmitter<void>();

    constructor(private element: ElementRef, renderer: Renderer) {
        // 设置 font size 成 x-large
        // `nativeElement` 是作用元素
        // element.nativeElement.style.fontSize = 'x-large';
        // console.log(element);

        // 为了让 server/webworker 支持 用  renderer 渲染
        // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');

        // console.log(animationOn);
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log('ngOnChanges');
        // console.log(changes);
        const chng = changes['ficker1'];
        let cur = chng.currentValue;
        let prev = chng.previousValue;
        // console.log(cur);
        // console.log(prev);
        if (cur === prev) {
            console.log('meiy');
            return;
        }
        if (this.ficker1) {
            setTimeout(() => {
                this.animation = this.startFicker(this.ficker1);
            }, 15);
        } else {
            if (this.animation)
                this.animation.cancel();
        };
    }
    private startFicker(ficker1: string) {
        // console.log(this.ficker1);
        // let a: any = new Proxy({}, {

        //     set(v: string) {
        //         console.log('haha');
        //         return true;
        //     },

        // });
        // a.b = 1;
        // if (!this.ficker1) return;
        const elem: any = this.element.nativeElement;
        return elem.animate(animationOn[this.ficker1].keyframes,
              animationOn[this.ficker1].options, );
    }
}

