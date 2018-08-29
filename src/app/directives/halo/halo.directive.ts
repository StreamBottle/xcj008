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
  SimpleChanges
} from '@angular/core';

import { animationOn } from '../../../app-config.animation';
/*
 * 指令
 * XLarge 字体变大
 */
@Directive({
  selector: '[halo]' // 用 [ ] 代表 属性
})
export class HaloDirective implements OnChanges {
  animation;
  @Input('halo') halo: any;
  @Output() cancelAnimation = new EventEmitter<void>();
  // @HostListener('click') onClick() {     console.log(this.animation);     if
  // (this.animation)         this.animation.cancel();     console.log('end'); }

  constructor(private element: ElementRef, renderer: Renderer) {
    // 设置 font size 成 x-large `nativeElement` 是作用元素
    // element.nativeElement.style.fontSize = 'x-large'; console.log(element); 为了让
    // server/webworker 支持 用  renderer 渲染
    // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');

    // console.log(animationOn);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges'); console.log(changes);
    const chng = changes['halo'];
    let cur = chng.currentValue;
    let prev = chng.previousValue;
    // console.log(cur); console.log(prev);
    if (cur === prev) {
      console.log('meiy');
      return;
    }
    if (this.halo) {
      setTimeout(() => {
        if (this.animation)
          this.animation.cancel();
        this.animation = this.startHalo(this.halo);
      }, 15);
    } else {
      if (this.animation)
        this.animation.cancel();
    };
  }
  private startHalo(halo: string) {
    // console.log(this.halo);
    // let a: any = new Proxy({}, {     set(v: string) {
    // console.log('haha');         return true;     }, }); a.b = 1; if (!this.halo)
    // return;
    const elem: any = this.element.nativeElement;

    if (animationOn[this.halo])
      return elem.animate(animationOn[this.halo].keyframes, animationOn[this.halo].options);
  }
}
