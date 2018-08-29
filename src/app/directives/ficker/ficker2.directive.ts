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
@Directive({
    selector: '[ficker2]' // 用 [ ] 代表 属性
})
export class Ficker2Directive implements OnChanges {
    animation;
    @Input('ficker2') ficker2: any;
    @Output() cancelAnimation = new EventEmitter<void>();
    // @HostListener('click') onClick() {
    //     console.log(this.animation);
    //     if (this.animation)
    //         this.animation.cancel();
    //     console.log('end');
    // }

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
        const chng = changes['ficker2'];
        let cur = chng.currentValue;
        let prev = chng.previousValue;
        // console.log(cur);
        // console.log(prev);
        if (cur === prev) {
            console.log('meiy');
            return;
        }
        if (this.ficker2) {
            setTimeout(() => {
                this.animation = this.startFicker(this.ficker2);
            }, 15);
        } else {
            if (this.animation)
                this.animation.cancel();
        };
    }
    private startFicker(ficker2: string) {
        // console.log(this.ficker2);
        // let a: any = new Proxy({}, {

        //     set(v: string) {
        //         console.log('haha');
        //         return true;
        //     },

        // });
        // a.b = 1;
        // if (!this.ficker2) return;
        const elem: any = this.element.nativeElement;
        return elem.animate(animationOn[this.ficker2].keyframes,
                animationOn[this.ficker2].options, );
    }
}
